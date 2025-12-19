function solution(num_list) {
    var answer = 0;
    let multiple_vlaue = 1;
    let square_vlaue = 0;
    for(let i = 0; i< num_list.length; i++){
        multiple_vlaue *= num_list[i];
        square_vlaue += num_list[i];
    }
    square_vlaue = square_vlaue**2;
    if(multiple_vlaue <square_vlaue){
        answer = 1;
    }
    console.log(multiple_vlaue);
        console.log(square_vlaue);
    return answer;
}