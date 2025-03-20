function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            arr.push(i);
        }
    }
    
    let answer = 0;
    for(let j = 0; j < arr.length; j++){
        answer += arr[j]
    }
    
    return answer;
}