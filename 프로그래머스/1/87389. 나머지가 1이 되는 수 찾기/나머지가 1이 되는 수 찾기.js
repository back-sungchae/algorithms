function solution(n) {
  const target = n - 1;
  for (let x = 2; x <= target; x++) {
    if (target % x === 0) return x;
  }
}