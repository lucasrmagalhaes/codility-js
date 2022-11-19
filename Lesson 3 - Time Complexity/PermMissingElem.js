function solution(A) {
    A.sort((a, b) => a - b);

    if (A[0] != 1) {
        return 1;
    }

    let result = 1;
    let arrLength = A.length;
    
    if (arrLength == 1) {
        result = A[0] == 1 ? A[0] + 1 : 1;
    } else {
        for (let i = 0; i < arrLength; i++) {
            if (A[i] + 1 < A[i + 1] || i == arrLength - 1) {
                result = A[i] + 1;
                break;
            }
        }  
    }
    
    return result;
}