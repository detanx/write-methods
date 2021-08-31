// 字符串转化为对应的数值
const score = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
}

const scoreKey = Object.assign(score, {
    'J': 11,
    'Q': 12,
    'K': 13,
})
// 不同花色
const typeList = ['S', 'H', 'C', 'D'];
// 不同花色权值
const typeScore = {
    'S': 4, // 黑桃
    'H': 3, // 红桃
    'C': 2, // 梅花
    'D': 1 // 方片
};

// 获取最大分数
const getMaxScore = list => {
    const result = new Set([0]);
    const len = list.length;
    const sum = list.reduce((pre, next) => pre + next, 0);
    for(let i = 0; i < len - 1; i ++) { // 遍历到倒数第二个结束，因为需要 2 个数相加， 而且 最后一个 i + 1 无意义
        for(let j = i + 1; j < len; j ++) {
            const twoSum = list[i] + list[j];
            const threeSum = sum - twoSum;
            if(threeSum % 10 === 0) {
                result.add(twoSum > 10 ? twoSum - 10 : twoSum); // 总和不大于 10，得分则为 2 张剩余牌的总和，否则为总和减 10
            }
        }
    }
    return Math.max(...result);
}

/**
 * @Description: 过滤字符串
 * @param {String}
 * @return {[Object, Array]}
 */
const filterString = str => {
    const len = str.length;
    const strObjList = [];
    const list = [];
    for(let i = 0; i < len;) {
        // 排序数组对象键，分数数值，后移位数
        let key, NumberValue, flag;
        if(str[i + 2] && !typeList.includes(str[i + 2])) { // 索引之后的第二位是否存在并且对应的不是花色
            key = scoreKey[str.slice(i+1, i + 3)];
            NumberValue = score[str.slice(i+1, i + 3)];
            flag = false;
        } else {
            key = scoreKey[str[i+1]];
            NumberValue = score[str[i+1]];
            flag = true;
        }
        strObjList.push({ // 存入五张牌的对象
            key, // 分数点
            value: typeScore[str[i]] // 花色权值
        });
        list.push(NumberValue);
        flag ? i += 2 : i += 3;
    }
    strObjList.sort((a, b) => {
        if(a.key > b.key) { // 分数点排序
            return -1;
        } else if(a.key === b.key) { // 分数相同，花色权值排序
            return a.value - b.value > 0 ? -1 : 1;
        }
        return 1;
    })
    const strMaxObj = strObjList[0];
    return [strMaxObj, list];
}
