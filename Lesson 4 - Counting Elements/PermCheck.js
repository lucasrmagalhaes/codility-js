function solution(A) {
    A.sort((a, b) => a - b);

    let n = A.length;
    
    for (let i = 1; i <= n; i++) {
        if (A[i - 1] != i) {
            return 0;
        }
    }
    
    return 1;
}