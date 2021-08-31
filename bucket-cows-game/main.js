// 获取赢者
const getWinPlayer = (player1, player2) => {
    const [player1_strMaxObj, player1_list] = filterString(player1);
    const [player2_strMaxObj, player2_list] = filterString(player2);
    const player1_score = getMaxScore(player1_list);
    const player2_score = getMaxScore(player2_list);

    // 对比分数
    if(player1_score > player2_score) {
        return 'Leon';
    } else if (player1_score < player2_score) {
        return 'Judy'
    } else { // 分数相同
        // 对比最大值
        if(player1_strMaxObj.key > player2_strMaxObj.key) {
            return 'Leon';
        } else if (player1_strMaxObj.key < player2_strMaxObj.key) {
            return 'Judy'
        } else { // 最大值相同
            // 对比花色
            if(player1_strMaxObj.value > player2_strMaxObj.value) {
                return 'Leon';
            }
            // } else if (player1_strMaxObj.value < player2_strMaxObj.value) {
                return 'Judy'
            // }
        }
    }
}

// getWinPlayer("H2H8S7C10DA", "S3D10C5DJCQ");