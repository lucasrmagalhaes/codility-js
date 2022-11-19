function solution(A) {
    let pos = 0;
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[pos] == A[i]) {
            count++;
        } else {
            count--;

            if (count == 0) {
                pos = i;
                count++;
            }
        }
    }

    let ret = 0;
    let cand = A[pos];

    let E = [];
    let N = [];

    let ec = 0;
    let nc = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] == cand) {
            ec++;
        } else {
            nc++;
        }
        
        E[i] = ec;
        N[i] = nc;
    }

    for (let i = 0; i < A.length; i++) {
        if (E[i] > N[i] && ((nc - N[i]) < (ec - E[i]))) {
            ret++;
        }
    }

    return ret;
}