function solution(A) {
    let D = {};

    for (let i in A) {
       if (A[i] in D) {
           D[A[i]]++;
       } else {
           D[A[i]] = 1;
       }
    }

    for (let i in D) {
        if (D[i] % 2 == 1) {
            return parseInt(i);
        }
    }
    
    return 0;
}