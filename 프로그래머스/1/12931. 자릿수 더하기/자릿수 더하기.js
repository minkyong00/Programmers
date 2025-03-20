function solution(n){
    //문자열로 반환하고 split, reduce로 합구하기
   const num = n.toString().split('')
                .reduce((sum, c) => sum + parseInt(c), 0)
   return num;
}
