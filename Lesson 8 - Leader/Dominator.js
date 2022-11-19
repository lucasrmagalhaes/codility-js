function solution(A) {
    if (A.length == 0) {
        return -1;
    }

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

    count = 0;

    let cand = A[pos];
    
    for (let i in A) {
        if (A[i] == cand) {
            count++;
        }
    }

    if (count <= A.length / 2) {
        return -1;
    }

    return pos;
}