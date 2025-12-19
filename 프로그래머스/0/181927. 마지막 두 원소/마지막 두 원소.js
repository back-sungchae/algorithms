function solution(num_list) {
    var answer = [...num_list];
    let arr_length = num_list.length;
    let last_value = num_list[arr_length - 1];
    let last_sec_value = num_list[arr_length - 2]
    let value;
    if(last_value > last_sec_value){
        value = last_value - last_sec_value;
    }else{
        value = last_value * 2;
    }
    answer.push(value);
    return answer;
}