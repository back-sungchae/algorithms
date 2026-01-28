function solution(new_id) {
  new_id = new_id.toLowerCase();        // 1
  new_id = filterAllowed(new_id);       // 2
  new_id = filterDots(new_id);          // 3
  new_id = filterDot(new_id);           // 4
  new_id = ensureNotEmpty(new_id);      // 5
  new_id = filterLength(new_id);        // 6
  new_id = filter3Length(new_id);       // 7
  return new_id;
}

// 2) 허용 문자만 남기기(ASCII)
function filterAllowed(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);

    const isLower = code >= 97 && code <= 122; // a-z
    const isDigit = code >= 48 && code <= 57;  // 0-9
    const isAllowedSymbol = code === 45 || code === 95 || code === 46; // - _ .

    if (isLower || isDigit || isAllowedSymbol) out += s[i];
  }
  return out;
}

// 3) 연속 '.'을 하나로
function filterDots(s) {
  let out = '';
  let prevDot = false;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '.') {
      if (!prevDot) out += '.';
      prevDot = true;
    } else {
      out += c;
      prevDot = false;
    }
  }
  return out;
}

// 4) 앞/뒤 '.' 제거
function filterDot(s) {
  while (s.length > 0 && s[0] === '.') s = s.slice(1);
  while (s.length > 0 && s[s.length - 1] === '.') s = s.slice(0, -1);
  return s;
}

// 5) 빈 문자열이면 "a"
function ensureNotEmpty(s) {
  return s.length === 0 ? 'a' : s;
}

// 6) 15자 자르고, 끝 '.' 제거
function filterLength(s) {
  if (s.length >= 16) s = s.slice(0, 15);
  while (s.length > 0 && s[s.length - 1] === '.') s = s.slice(0, -1);
  return s;
}

// 7) 길이 3 될 때까지 마지막 문자 반복
function filter3Length(s) {
  while (s.length <= 2) s += s[s.length - 1];
  return s;
}