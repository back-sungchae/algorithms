function solution(number, limit, power) {
  // 1. 각 숫자의 약수 개수를 저장할 배열
  const array = Array(number + 1).fill(0);

  // 2. 약수 개수 계산
  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      array[j]++;
    }
  }

  // 3. 철의 총 무게 계산
  let total = 0;

  for (let i = 1; i <= number; i++) {
    if (array[i] > limit) {
      total += power;
    } else {
      total += array[i];
    }
  }

  return total;
}