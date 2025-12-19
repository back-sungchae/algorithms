function solution(a, b) {
    var answer = 0;
    answer = parseInt(`${a}${b}`);
    let trans_value = parseInt(`${b}${a}`);
    if(answer < trans_value){
        answer = trans_value
    }
    return answer;
}