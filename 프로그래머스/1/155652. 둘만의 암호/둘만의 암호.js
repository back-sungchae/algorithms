function solution(s, skip, index) {
    var answer = '';
    let pass = [];

    // skip → 아스키 코드
    for (let i = 0; i < skip.length; i++) {
        pass.push(skip[i].charCodeAt());
    }

    // 문자열은 수정 불가 → 배열로 변환
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].charCodeAt());
    }

    let i = 0;
    let cnt = 0;

    while (i < arr.length) {
        arr[i]++;

        // z 초과 시 a로
        if (arr[i] > 122) arr[i] = 97;

        // skip 문자면 다시 증가
        if (pass.includes(arr[i])) continue;

        cnt++;
        if (cnt === index) {
            cnt = 0;
            i++;
        }
    }

    // 🔽 여기서 아스키 → 문자 변환 후 answer에 추가
    for (let i = 0; i < arr.length; i++) {
        answer += String.fromCharCode(arr[i]);
    }

    return answer;
}