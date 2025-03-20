function solution(numbers) {
    const string = numbers.toString().split(",")
    const sort = string.sort((a, b) => (b + a) - (a + b))
    // console.log(sort)
    const answer = sort.reduce((acc, curr) => acc + curr.toString())
    // console.log(answer)
    
    if(answer[0] === '0') return '0';
    return answer;
}
