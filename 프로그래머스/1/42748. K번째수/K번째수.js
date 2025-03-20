function solution(array, commands) {
    let answer = [];
    for(let command of commands){
        const [start, end, k] = command;
        const data = array.slice(start - 1, end).sort((a, b) => a - b)[k - 1]
        answer.push(data)
    }

    return answer;
}