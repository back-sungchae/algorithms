function solution(name, yearning, photo) {
    let yearning_map = {};      // 이름 → 그리움 점수
    let answer = [];

    // 사람 이름과 점수 매핑
    for (let i = 0; i < name.length; i++) {
        yearning_map[name[i]] = yearning[i];
    }

    // 각 사진별 추억 점수 계산
    for (let i = 0; i < photo.length; i++) {
        let memory_score = 0;

        for (let j = 0; j < photo[i].length; j++) {
            memory_score += yearning_map[photo[i][j]] ?? 0;
        }

        answer.push(memory_score);
    }

    return answer;
}