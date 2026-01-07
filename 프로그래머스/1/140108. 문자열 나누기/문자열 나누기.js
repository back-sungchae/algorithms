function solution(s) {
    let answer = 0;
    let array = s.split("");

    let count = { x: 0, y: 0 };
    let target = array[0];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            count.x++;
        } else {
            count.y++;
        }

        if (count.x === count.y) {
            answer++;
            // 다음 문자 기준으로 리셋
            target = array[i + 1];
            count.x = 0;
            count.y = 0;
        }
    }

    // 마지막 덩어리 처리
    if (count.x !== 0) {
        answer++;
    }

    return answer;
}