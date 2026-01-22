function solution(sizes) {
  let max_width = 0;  // 긴 변들 중 최대
  let max_height = 0; // 짧은 변들 중 최대

  for (let i = 0; i < sizes.length; i++) {
    const width = sizes[i][0];
    const height = sizes[i][1];

    const big = Math.max(width, height);
    const small = Math.min(width, height);

    if (big > max_width) max_width = big;
    if (small > max_height) max_height = small;
  }

  return max_width * max_height;
}