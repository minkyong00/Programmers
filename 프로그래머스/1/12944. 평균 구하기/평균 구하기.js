function solution(arr) {
    const sum = arr.reduce((a, c) => a + c, 0)
    // console.log(sum)
    const avg = sum / arr.length;
    console.log(avg)
    return avg;
}