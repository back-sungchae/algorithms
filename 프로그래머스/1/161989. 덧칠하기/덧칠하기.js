function solution(n, m, section) {
    var answer = 0;
    let value = 0;

    for (let i = 0; i < section.length; i++) {
        if (section[i] > value) {
            answer++;
            value = section[i] + m - 1;
        }
    }
    return answer;
}