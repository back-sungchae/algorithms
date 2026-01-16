function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        const exchanged = Math.floor(n / a); // 교환 횟수
        const received = exchanged * b;      // 받은 콜라

        answer += received;
        n = (n % a) + received;               // 남은 병 + 새 병
    }

    return answer;
}