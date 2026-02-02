function solution(X, Y) {
  // 0~9 카운트 객체 초기화
  const x_obj = {};
  const y_obj = {};
  for (let d = 0; d <= 9; d++) {
    x_obj[d] = 0;
    y_obj[d] = 0;
  }

  // X 카운트
  for (let i = 0; i < X.length; i++) {
    const d = X[i];        // '0'~'9'
    x_obj[d] += 1;
  }

  // Y 카운트
  for (let i = 0; i < Y.length; i++) {
    const d = Y[i];
    y_obj[d] += 1;
  }

  // 9부터 공통 개수(min)만큼 붙이기
  let out = [];
  for (let d = 9; d >= 0; d--) {
    const key = String(d);
    const k = Math.min(x_obj[key], y_obj[key]);
    if (k > 0) out.push(key.repeat(k));
  }

  if (out.length === 0) return "-1";

  const answer = out.join("");

  // 결과가 0만 있으면 "0"
  if (answer[0] === "0") return "0";

  return answer;
}