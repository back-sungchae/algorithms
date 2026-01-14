function solution(food) {
    let left_array = '';

    for (let i = 1; i < food.length; i++) {
        left_array += String(i).repeat(Math.floor(food[i] / 2));
    }

    const right_array = left_array.split('').reverse().join('');
    return left_array + '0' + right_array;
}