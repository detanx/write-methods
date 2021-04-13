const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
    constructor(excutor) {
        try {
            excutor(this.resolve, this.reject);
        } catch(err) {
            this.reject(err)
        }
        
    }
    status = PENDING;
    value = null;
    reason = null;
    resolveCallbackList = [];
    rejectCallbackList = [];

    static resolve (parameter) {
        if (parameter instanceof MyPromise) {
            return parameter
        }
        return new MyPromise(resolve => {
            resolve(parameter);
        })
    }
    
    static reject (parameter) {
        return new MyPromise((resolve, reject) => {
            reject(parameter);
        })
    }

    // 更新成功状态
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
        }
        while(this.resolveCallbackList.length) {
            this.resolveCallbackList.shift()(value);
        }
    }

    // 更新失败状态
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
        }
        while(this.rejectCallbackList.length) {
            this.rejectCallbackList.shift()(reason);
        }
    }

    // 异步调用
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' && onFulfilled !== Function ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' && onRejected !== Function ? onRejected : reason => {throw reason};

        const promise1 = new MyPromise((resolve, reject) => {
            const commonMicrotask = (type = FULFILLED) => () => { // 接收一个区分参数，返回一个函数
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        let x;
                        // 调用成功/失败回调，并且把值/原因返回
                        type === FULFILLED ? x = onFulfilled(this.value) : x = onRejected(this.reason);
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise1, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    } 
                })
            }
            
            if(this.status === PENDING) {
                this.resolveCallbackList.push(commonMicrotask(FULFILLED));
                this.rejectCallbackList.push(commonMicrotask(REJECTED));
            } else if(this.status === FULFILLED) {
                commonMicrotask(FULFILLED)();
            } else if (this.status === REJECTED) {
                commonMicrotask(REJECTED)();
            }
        })
        return promise1;
    }
    
    // 异常捕获
    catch (onRejected) {
        return this.then(null, onRejected);
    }

    // 始终执行 finally
    finally(func) {
        return this.then(
            value =>  MyPromise.resolve(func()).then(() => value),
            err => MyPromise.resolve(func()).then(() => { throw err})
        );
    }

    // all
    static all(promiseList) {
        return new MyPromise((resolve, reject) => {
            const result = [];
            // 非null的对象 并且有 iterator 借口
            if(promiseList !== null && typeof promiseList[Symbol.iterator] === 'function') {
                const len = promiseList.length;
                if (len === 0) resolve(result);
                let count = 0;
                for (let i = 0; i < len; i ++) {
                    if (promiseList[i] instanceof MyPromise) { // promise
                        promiseList[i].then(value => {
                            result[i] = value;
                            ++ count;
                            if (count === len) resolve(result);
                        }, reject);
                    } else {
                        result[i] = promiseList[i];
                        ++ count;
                        if (count === len) resolve(result);
                    }
                }
            } else {
                reject( new TypeError(typeof promiseList + `${promiseList === null ? ' null' : ''} is not iterable (cannot read property Symbol(Symbol.iterator))`))
            }
        })
    }
}
const resolvePromise = (promise, x, resolve, reject) => {
    if (promise === x) { // 如果相等了，说明return的是自己，抛出类型错误并返回
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if (typeof x === 'object' || typeof x === 'function') {
        if (x === null) { // x 为 null 直接返回，走后面的逻辑会报错
            return resolve(x);
        }
        let then;
        try {
            then = x.then;
        } catch(error) { // 如果取 x.then 的值时抛出错误 error ，则以 error 为据因拒绝 promise
            return reject(error);
        }
        
        if (typeof then === 'function') { // 如果 then 是函数
            let called = false;
            try {
                then.call( // this 指向 x
                x, y => { // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    // 如果 resolvePromise 和 rejectPromise 均被调用，
                    // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                    // 实现这条需要前面加一个变量 called
                    if (called) return;
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                }, r => { // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    if (called) return;
                    called = true;
                    reject(r);
                });
            } catch (error) { // 如果调用 then 方法抛出了异常 error：
                // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
                if (called) return;

                // 否则以 error 为据因拒绝 promise
                reject(error);
            }
        } else { // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else { // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}

// defered
MyPromise.deferred = function () {
    const dfd = {};
    dfd.promise = new MyPromise( (resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}

// module.exports = MyPromise