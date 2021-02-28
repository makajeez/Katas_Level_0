function maxValue(...numbers){
    let maxNum = numbers[0]
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > maxNum){
            maxNum = numbers[i]
        }
    }
    return maxNum
}
