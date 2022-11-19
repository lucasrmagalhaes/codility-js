function solution(A, B) {
    let downStream = [];
    let upStream = [];
    let direction;
    
    for (let i = 0; i < A.length; i++) {
        direction = B[i];
        
        if (direction === 0) {
            while (downStream.length > 0) {
                let d = downStream.pop();
                
                if (d > A[i]) {
                    downStream.push(d);
                    break;
                }
            }
        
            if (downStream.length === 0) {
                upStream.push(A[i]);
            }
        } else {
            downStream.push(A[i]);
        }
    }
    
    return downStream.length + upStream.length;
}