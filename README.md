### write-methods

This is a repository of common handwriting methods.

### 1. 防抖

- 防抖：在限制的时间范围内连续触发相同事件，函数不会执行，直到间隔大于限制事件才执行。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/997ea7c3f5ea449794ae408a01efbead~tplv-k3u1fbpfcp-watermark.image)

### 2. 节流

- 节流：连续触发相同事件每隔指定时间调用一次。

#### 2.2 定时器版节流

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b750dd4bedb46afa395eb9d60b50178~tplv-k3u1fbpfcp-watermark.image)

#### 2.3 时间戳版节流

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7355dd33817144bfa606c5a01678caf3~tplv-k3u1fbpfcp-watermark.image)

### 3. 柯里化

- 将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

#### 3.1 普通版

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41fea0d970af419fa28c74ae8c7cd160~tplv-k3u1fbpfcp-watermark.image)

#### 3.2 `ES6`版

- [参考地址](https://juejin.cn/post/6844903856489365518#heading-10)
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a8628e9b8984173af3f82489700b117~tplv-k3u1fbpfcp-watermark.image)

### 4. 封装浏览器本地存储 `localStorage`、`sessionStorage`

- 通过 `new` 操作符创建一个`localStorage / sessionStorage`的实例，在需要用的地方引入该实例，使用方法和之前类似，`setItem` 额外提供第三个参数设置过期时间。
- 额外提供两个方法 `getAll`（获取当前存储类型的所有存储内容的键值对象）、`forEach`（遍历所有存储内容，接收一个处理函数，函数接收两个参数：存储键名、对应的值）。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f85b0c74684678805da94563c2fde3~tplv-k3u1fbpfcp-watermark.image)

### 5. 类 `JAVA sleep` 函数

- `sleep` 函数可以让当前线程进行休眠指定时间。

#### 5.1 使用循环

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e145b689cc4d453aa550999abc50faa0~tplv-k3u1fbpfcp-watermark.image)

- 使用 `time` 打印执行时间会有一定误差。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c10c540f8e343a8be15f710063edc36~tplv-k3u1fbpfcp-watermark.image)

#### 5.2 `Promise`

- 使用 `Promise` 实现的，我更倾向理解为延迟，它不会中断当前执行代码，只是微任务，在延迟之后执行！

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610c59c02a00419184bfdfc7d72169b6~tplv-k3u1fbpfcp-watermark.image)

- `then` 方法调用
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42d8ae06f2104dc7807c28a9566f9e13~tplv-k3u1fbpfcp-watermark.image) -` async/await` 方式

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9a77147c1214adc980dda2b0aec87c8~tplv-k3u1fbpfcp-watermark.image)

#### 5.3 `Generator`

- 使用 `Generator` 实现的与 `Promise` 类似。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b11d5d82ef494294bfc267fa2c52fd1e~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05528ef5859245cb8bd2331614f62f56~tplv-k3u1fbpfcp-watermark.image)

### 6. 实现 `new` 操作符

- `new` 做了什么：
  1. 创建了一个全新的对象；
  2. 会被执行 `[[Prototype]]`（也就是 `__proto__` ）链接；
  3. `this` 指向新创建的对象；
  4. 通过 `new` 创建的每个对象将最终被 `[[Prototype]]` 链接到这个函数的 prototype 对象上；
  5. 如果函数没有返回对象类型 `Object`(包含 `Functoin` , `Array` , `Date` , `RegExg`, `Error`)，那么 `new` 表达式中的函数调用将返回该对象引用。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26c8fd86016249ef85201c1dcbb97921~tplv-k3u1fbpfcp-watermark.image)

#### 6.1 普通写法

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48bd6232b5541058b67b0806c870112~tplv-k3u1fbpfcp-watermark.image)

#### 6.2 箭头函数写法

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09ecd881f708447ab7babe40c13b4c33~tplv-k3u1fbpfcp-watermark.image)

#### 6.3 测试结果

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b66b3a4aeeec4a818fe6dac0738f1710~tplv-k3u1fbpfcp-watermark.image)

### 7. 实现 `instaceof`

- `instanceof` 用于判断一个变量是否某个对象的实例。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1a7f02c529e49a19b6383172af526af~tplv-k3u1fbpfcp-watermark.image)

### 8. 判断浏览器、浏览器内核、PC/Mobile、手机类型、操作系统

- 手机类型：`iPhone`, `Pixel`, `Moto`, `iPad`, `iPod`
- 浏览器类型：`Opera`, `Firefox`, `Chrome`, `Safari`,`WeChat`, `QQ`
- 内核类型：`Trident`, `Presto`, `WebKit`, `Gecko`
- 操作系统类型：`Mac`, `iOS`, `Android`, `Linux`, `Unix`, `Win`, `Win7`, `Win2000`, `Win2003`, `WinXP`, `WinVista`
- 电脑/手机：`PC`、`Mobile`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/164edd201b2943abb56dcf5dcf67dabf~tplv-k3u1fbpfcp-watermark.image)

### 9. 绑定 `this`

- 相同点：
  - `call`、`bind`、 `apply` 都是用来改变 `this` 指向的。
  - `call`、`bind`、 `apply` 这三个函数的第一个参数都是 `this` 的指向对象。
- 不同点：
  - `call` 参数是直接放进去的，第二第三第 `n` 个参数全都用逗号分隔。
  - `apply` 的所有参数都必须放在一个数组里面。
  - `bind` 除了返回是函数以外，它的参数和 `call` 一样。

#### 9.1 `call`

- 不传入参数，默认指向为 `window`；
- 将函数设为对象的属性；
- 传入给定参数给执行函数并执行、删除这个函数。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d9401b92dc94c75b1ea9725fc7e3a32~tplv-k3u1fbpfcp-watermark.image)

#### 9.2 `apply`

- 与 `call` 类似，第二参数为数组。
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df86d1626dde4294a7638fc98711bfd7~tplv-k3u1fbpfcp-watermark.image)

#### 9.3 `bind`

- 与 `call` 类似，返回的是一个函数。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de32e6dcf77949f5a6fe10341647e5e2~tplv-k3u1fbpfcp-watermark.image)

#### 9.4 测试结果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16990ffd8915443c9860d043feedbed8~tplv-k3u1fbpfcp-watermark.image)

### 10. 发布/订阅模式

- [JS 和多端应用通信](https://juejin.cn/post/6854573216107593742)
- 通过 `new` 操作符创建一个`EventEmitter`的实例，在需要用的地方引入该实例
  - `add`：注册事件；
  - `once`：注册只执行一次的事件，执行后销毁；
  - `remove`：移除事件支持全部移除、指定回调方法/下标（第几次绑定的事件）；
  - `removeByIndex`：支持全部移除/指定下标（第几次绑定的事件）；
  - `removeByCallback`：支持全部移除/指定回调方法；
  - `dispatch`：触发指定事件；
  - `clear`：清除全部注册事件；
  - `getAll`：获取全部注册事件；
  - `forEach`：遍历所有注册事件，并接受回调函数，回调函数接收两个参数：事件名称、事件注册的回调函数数组。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/522ce1e86cc540f8917b9af1295ff8f9~tplv-k3u1fbpfcp-watermark.image)

### 11. `Promise`

- 请点击跳转链接 -> [ES6 Promise 最全手写实现](https://juejin.cn/post/6844904153651773448)

### 12. 数组 `flat`

- `flat` 方法是把多维数组进行指定维度的扁平化。
  - 不传参数，维度降一。
  - 传入 `Number`，大于最大维度，降为一维；小于 `1` 返回原始数组。
  - 传入 `Infinity` 降为一维;
  - 传入其他能转为 `Number`，转为 `Number` 再根据上面的规则判断，否则返回原始数组。

#### 12.1 任意维度降一维（数据类型不变）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b5249b206a34bb997290e7baa5a2a9d~tplv-k3u1fbpfcp-watermark.image)

#### 12.2 任意维度降一维（数据类型变字符串）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cfc6ae266c04a6c8b3419c09c6b2a4d~tplv-k3u1fbpfcp-watermark.image)

#### 12.3 指定维度 `ES6` 数组方法

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/def6efae24b34ef0a4a27a6f4333abe5~tplv-k3u1fbpfcp-watermark.image)

#### 12.4 指定维度 `js` 递归

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b11b0b2c8e1e4c49af8c2efae718210d~tplv-k3u1fbpfcp-watermark.image)
