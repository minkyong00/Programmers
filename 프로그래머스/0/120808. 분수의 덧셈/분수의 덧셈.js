function gcd(a, b) {
    if(a % b == 0){
        return b
    }
    return gcd(b, a % b)
}


function solution(numer1, denom1, numer2, denom2) {
    
    let boonmo = denom1 * denom2;
    let boonja = numer1 * denom2 + numer2 * denom1;
    
    gcd_value = gcd(boonmo, boonja)
    
    var answer = [boonja / gcd_value, boonmo / gcd_value];
    return answer;
}