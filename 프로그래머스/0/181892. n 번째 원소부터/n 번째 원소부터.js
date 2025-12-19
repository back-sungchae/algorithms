function solution(num_list, n) {
    var answer = [];
    for(let i = n-1; i<num_list.length; i++){
        console.log(num_list[i]);
        answer.push(num_list[i]);
    }
    return answer;
}