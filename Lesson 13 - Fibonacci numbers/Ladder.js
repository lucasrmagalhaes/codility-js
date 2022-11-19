function solution(A, B) {
    let f = new Array(A.length+1);

    f[0] = 1;
    f[1] = 1;
    
    let MAX = 1<<30;

    for (let i = 2; i < f.length; ++i) {
        f[i] = f[i-1] + f[i-2];
        f[i] = f[i] % MAX;
    }

    let res = new Array(A.length);

    for (let i = 0; i < A.length; ++i) {
        res[i] = f[A[i]] % (1 << B[i]);
    }

    return res;
}