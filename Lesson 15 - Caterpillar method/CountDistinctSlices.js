function solution(M, A) {    
    const LIMIT = 1000000000;
    
    let lastPos = [];
    let i = 0;
    let count = 0;
    let start = 0;
    
    if (A.length === 1) {
        return 1;
    }
    
    for (i = 0; i<= M; i++) {
        lastPos[i] = -1;
    }
    
    for (i = 0; i < A.length; i++) {
        var item = A[i];
        
        if (lastPos[item] + 1 > start) {
            start = lastPos[item] + 1;
        }
        
        lastPos[item] = i;
        count += i - start + 1;
        
        if (count > LIMIT) {
            break;
        }
    }
    
    return count > LIMIT ? LIMIT : count;
}