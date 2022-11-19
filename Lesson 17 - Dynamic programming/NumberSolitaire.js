function solution(A) {
    let n = A.length;
    let dp = new Array(n);
    
    dp[0] = A[0];

    for (let i = 1; i < n; i++) {
        let max = dp[i - 1] + A[i];

        for (let j = 1; j <= 6; j++) {
            if (i - j >= 0) {
                max = Math.max(dp[i - j] + A[i], max);
            }
        }

        dp[i] = max;
    }

    return dp[n - 1];
}