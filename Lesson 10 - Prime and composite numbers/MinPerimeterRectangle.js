function solution(N) {
    for (let i = parseInt(Math.sqrt(N), 10); true; i--) {
        if (N % i == 0) {
            return 2 * i + 2 * (N / i);
        }     
    }
}