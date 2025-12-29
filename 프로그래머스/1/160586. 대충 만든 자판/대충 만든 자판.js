function solution(keymap, targets) {
  // 문자별 최소 누름 횟수
  const char_min_press = {};

  // keymap 순회
  for (let i = 0; i < keymap.length; i++) {
    const key = keymap[i];

    for (let j = 0; j < key.length; j++) {
      const char = key[j];
      const press_count = j + 1;

      if (char_min_press[char] === undefined) {
        char_min_press[char] = press_count;
      } else if (char_min_press[char] > press_count) {
        char_min_press[char] = press_count;
      }
    }
  }

  // targets 계산
  const result = [];

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    let total_press = 0;
    let is_possible = true;

    for (let j = 0; j < target.length; j++) {
      const char = target[j];

      if (char_min_press[char] === undefined) {
        is_possible = false;
        break;
      }

      total_press += char_min_press[char];
    }

    result.push(is_possible ? total_press : -1);
  }

  return result;
}