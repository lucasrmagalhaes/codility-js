function solution(A) {
    if (A.length < 2) {
        return 0;
    }

    let msf = 0;
    let meh = 0;
    
    for (let i = 1; i < A.length; i++) {
        meh = Math.max(0, meh + A[i] - A[i - 1]);
        msf = Math.max(msf, meh);
    }

    return msf > 0 ? msf : 0;
}