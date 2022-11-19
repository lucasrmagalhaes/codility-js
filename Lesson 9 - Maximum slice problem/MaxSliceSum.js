function solution(A) {
    let meh = -2147483648;
    let msf = -2147483648;

    for (let ind in A) {
    	let i = A[ind];
        
        meh = Math.max(i, meh + i);
        msf = Math.max(msf, meh);
    }

    return parseInt(msf, 10);
}