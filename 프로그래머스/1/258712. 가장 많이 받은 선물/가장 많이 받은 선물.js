function solution(friends, gifts) {
  var n = friends.length;

  // name -> index
  var idx = {};
  for (var i = 0; i < n; i++) {
    idx[friends[i]] = i;
  }

  // give[a][b] = a가 b에게 준 선물 횟수
  var give = new Array(n);
  for (i = 0; i < n; i++) {
    give[i] = new Array(n);
    for (var j = 0; j < n; j++) give[i][j] = 0;
  }

  // 이번 달까지 준/받은 총합
  var outCnt = new Array(n);
  var inCnt = new Array(n);
  for (i = 0; i < n; i++) {
    outCnt[i] = 0;
    inCnt[i] = 0;
  }

  for (i = 0; i < gifts.length; i++) {
    var parts = gifts[i].split(" ");
    var from = parts[0];
    var to = parts[1];

    var a = idx[from];
    var b = idx[to];

    give[a][b] += 1;
    outCnt[a] += 1;
    inCnt[b] += 1;
  }

  // 선물 지수 = 준 - 받은
  var giftIndex = new Array(n);
  for (i = 0; i < n; i++) {
    giftIndex[i] = outCnt[i] - inCnt[i];
  }

  // 다음 달에 받을 선물 수
  var nextReceive = new Array(n);
  for (i = 0; i < n; i++) nextReceive[i] = 0;

  // 모든 쌍(i < j) 비교
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      var ij = give[i][j];
      var ji = give[j][i];

      if (ij != ji) {
        if (ij > ji) nextReceive[i] += 1;
        else nextReceive[j] += 1;
      } else {
        if (giftIndex[i] != giftIndex[j]) {
          if (giftIndex[i] > giftIndex[j]) nextReceive[i] += 1;
          else nextReceive[j] += 1;
        }
      }
    }
  }

  // 최댓값 반환
  var ans = 0;
  for (i = 0; i < n; i++) {
    if (nextReceive[i] > ans) ans = nextReceive[i];
  }
  return ans;
}