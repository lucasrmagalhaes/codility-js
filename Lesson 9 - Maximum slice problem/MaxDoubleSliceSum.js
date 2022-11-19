function solution(A) {
    let sumsL = A.map(i => 0);
    let sumsR = A.map(i => 0);

    for (let iL = 1, iR = A.length - 2; iR >= 2; iL++, iR--) {
        sumsL[iL] = Math.max(0, sumsL[iL-1] + A[iL]);
        sumsR[iR] = Math.max(0, sumsR[iR+1] + A[iR]);
    }

    let max = sumsL[0] + sumsR[2];

    for (let i = 2; i < A.length-1; i++) {
        max = Math.max(max, sumsL[i - 1] + sumsR[i + 1]);
    }

    return max;
}