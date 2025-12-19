function solution(a, b) {
    var answer = 0;
    let trans_value = parseInt(`${a}${b}`);
    answer = 2*a*b;
    console.log(trans_value);
        console.log(answer);
    if(answer < trans_value){
        answer = trans_value
    }
    return answer;
}