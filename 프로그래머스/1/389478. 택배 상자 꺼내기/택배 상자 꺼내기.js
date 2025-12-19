function solution(n, w, num) {
    let answer = 1; // num 상자 본인 포함

    // 전체 층 수
    const totalRows = Math.ceil(n / w);

    // num이 위치한 층(row)
    const numRow = Math.ceil(num / w);

    // 해당 층에서의 위치 (0부터 시작)
    const posInRow = (num - 1) % w;

    // num이 실제로 위치한 열(column) 계산
    // 홀수 층: 왼 → 오, 짝수 층: 오 → 왼
    let col;
    if (numRow % 2 === 1) {
        col = posInRow;
    } else {
        col = w - 1 - posInRow;
    }

    // num 위에 쌓인 상자 개수 확인
    for (let row = numRow + 1; row <= totalRows; row++) {
        // 마지막 층은 상자가 w개보다 적을 수 있음
         if (row === totalRows && n % w !== 0) {
            boxesInRow = n % w;
        } else {
            boxesInRow = w;
        }

        // 홀수 층 (왼 → 오)
        if (row % 2 === 1) {
            if (col < boxesInRow) answer++;
        } 
        // 짝수 층 (오 → 왼)
        else {
            if (w - 1 - col < boxesInRow) answer++;
        }
    }

    return answer;
}