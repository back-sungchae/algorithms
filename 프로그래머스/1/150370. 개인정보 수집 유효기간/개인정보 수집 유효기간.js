function solution(today, terms, privacies) {
    var answer = [];
    let [current_year, current_month, current_day] = today.split(".").map(Number);
    
    let terms_obj = {};
    terms.forEach((value) => {
      terms_obj[value.split(" ")[0]] = Number(value.split(" ")[1]);
    });

    for (let i = 0; i < privacies.length; i++) {
        let [pri_year, pri_month, pri_day] =
            privacies[i].split(" ")[0].split(".").map(Number);
        let pri_terms = privacies[i].split(" ")[1];

        // 약관 개월 수 더하기
        pri_month += terms_obj[pri_terms];

        // 년/월 보정
        if (pri_month > 12) {
            pri_year += Math.floor((pri_month - 1) / 12);
            pri_month = ((pri_month - 1) % 12) + 1;
        }

        // 현재 날짜랑 계산된 날짜 비교
        let expired = pri_year < current_year ||
            (pri_year === current_year && pri_month < current_month) ||
            (pri_year === current_year &&
             pri_month === current_month &&
             pri_day <= current_day);

        if (expired) {
            answer.push(i + 1); // 문제 조건: 1번부터 시작
        }
    }

    return answer;
}