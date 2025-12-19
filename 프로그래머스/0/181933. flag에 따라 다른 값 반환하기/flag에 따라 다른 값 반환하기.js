function solution(a, b, flag) {
    var answer = 0;
    // flag의 조건 확인
    if(flag){
        answer = a+b;
    }else{
        answer = a-b;
    }
    return answer;
}