function solution(ingredient) {
    var answer = 0;
    // 쌓이는 순서대로 1,2,3,1 이렇게 쌓여야됨
    // 본문 for문에서 1,2,3,1 이렇게 될 경우에 빼기
    // 4개 이상 쌓였을 경우 확인
    let top = 0;
    let bugger_array = [];
    let count = 0;
    for(let i = 0; i<ingredient.length; i++){
        bugger_array[top] = ingredient[i];
        top++;
        if (top >= 4 && bugger_array[top - 4] === 1 && bugger_array[top - 3] === 2 && bugger_array[top - 2] === 3 && bugger_array[top - 1] === 1) {
          top -= 4;    
          count++;
        }
    }
    return count;
}