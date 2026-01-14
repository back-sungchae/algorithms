function solution(k, m, score) {
    let answer = 0;

    // 내림차순 정렬
    score.sort((a, b) => b - a);

    // m개씩 묶기
    for (let i = 0; i + m <= score.length; i += m) {
        // 묶음의 최저 점수는 i + m - 1
        answer += score[i + m - 1] * m;
    }

    return answer;
}