function solution(N, M) {
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }

        return gcd(b, a % b);
    }
    
    return N / gcd(N, M);
}