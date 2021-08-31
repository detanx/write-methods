// 过滤无效数据
const filterData = data => {
    // const notNormal = [];
    const filter = data.filter(item => {
        // 长度大于等于 10 即可
        const regexp = /([A-Z0-9]{10,};[A-Z0-9]{10,})/g;
        // 必须是标准有效数据
        const regexp1 = /^([SHCD]{1}([2-9]{1}|10|[AJQK])){5};([SHCD]{1}([2-9]{1}|10|[AJQK])){5}$/g;
        // 找出非标准有效数据
        // if(regexp.test(item) && !regexp1.test(item)) {
        //     notNormal.push(item)
        // }
        return regexp.test(item);
    });
    // console.log('notNormal', notNormal);
    return filter;
}

// 最终胜者
const getFinallyWinner = () => {
    const newData = filterData(testData);
    let leonCount = 0, judyCount = 0;
    newData.map(item => {
        const players = item.split(';')
        const win = getWinPlayer(players[0], players[1]);
        win === 'Leon' ? leonCount ++ : judyCount ++;
    })
    return `Leon赢：${leonCount} 次，Judy赢：${judyCount} 次`;
}

document.getElementById('winner').innerHTML = getFinallyWinner();
