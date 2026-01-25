function solution(price, total_money, count) {
    var answer = -1;
    let use_money = 0;
    for(let i = 1; i < count+1; i++){
         use_money+=i*price;
        console.log(use_money);
       
    }

    if(total_money < use_money){
        return use_money-total_money;
    }
    return 0;
}