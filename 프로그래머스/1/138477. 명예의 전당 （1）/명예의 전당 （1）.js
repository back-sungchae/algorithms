function solution(k, score) {
    const hall = [];   // 명예의 전당
    const result = [];

    for (let i = 0; i < score.length; i++) {
        hall.push(score[i]);          // 오늘 점수 추가
        hall.sort((a, b) => a - b);   // 오름차순 정렬

        // k명 초과하면 최하위 제거
        if (hall.length > k) {
            hall.shift();
        }

        // 현재 명예의 전당 최하위 점수 기록
        result.push(hall[0]);
    }

    return result;
}