function solution(lottos, win_nums) {
  const count = lottos.filter(n => n === 0).length;

  let matchCount = 0;
  for (let i = 0; i < win_nums.length; i++) {
    if (win_nums[i] !== 0 && lottos.includes(win_nums[i])) {
      matchCount++;
    }
  }

  return [rankByMatch(count+matchCount),rankByMatch(matchCount)];
}

function rankByMatch(n) {
  // n: 맞춘 개수
  return n >= 2 ? 7 - n : 6;
}