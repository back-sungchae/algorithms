function solution(s) {
    const answer = [];
    const last_index_map = {}; // 문자별 마지막 등장 위치

    for (let i = 0; i < s.length; i++) {
        const current_char = s[i];

        if (last_index_map[current_char] === undefined) {
            // 처음 등장
            answer.push(-1);
        } else {
            // 이전 위치와의 거리
            answer.push(i - last_index_map[current_char]);
        }

        // 현재 위치로 갱신
        last_index_map[current_char] = i;
    }

    return answer;
}