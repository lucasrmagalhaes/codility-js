function solution(A, B) {
    if (A.length ==0) {
        return A.length;
    }

    let count = 1;
    let ending = B[0];

    for (let i = 1; i < B.length; i++) {
        if (A[i] > ending) {
            ending = B[i];
            count++;
        }
    }
    
    return count;
}