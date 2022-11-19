function solution (X, A) {
    let arrPos = [];
    let varPos = 0;
    let sum = ((1 + X) * X) / 2;

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X && arrPos[A[i]] == undefined && arrPos[A[i]] !== A[i]) {
			arrPos[A[i]] = A[i];
            varPos += A[i];
        }

        if (sum == varPos) {
            return i;
        }
    }

    return -1;
}