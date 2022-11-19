function solution(A, K) {  
	let result = [];
  
    if (A.length === 1 || K === 0) {
      return A;
    }
  
    for (let i = 0; i < A.length; i++) {
        let newPos = (i + K) % A.length;

        result[newPos] = A[i];
    }
  
    return result;
}