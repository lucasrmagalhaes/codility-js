function solution(A) {
    if (A.length < 3) {
        return 0;
    }
    
    let i = 0;
    let j = 0;
    let peaks = [];
    let maxSize = 0;
    
    for (i = 1; i < A.length - 1; i++) {
        if(A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    
    if (peaks.length < 2) {
        return peaks.length;
    }
    
    parseInt(Math.sqrt(A.length));
    
    for (i = 1; i <= A.length; i++) {
        if(A.length % i === 0) {
            let blockSize = i;
            let blockCount = A.length / i;
            
            if (blockSize < 3) {
                continue;
            }
            
            let lastGroup = -1;
            
            for (j = 0; j < peaks.length; j++) {
                if (parseInt(peaks[j]/blockSize) === lastGroup + 1) {
                    lastGroup++;
                }
            }
            
            if (lastGroup + 1 === blockCount) {
                if (blockCount > maxSize) {
                    maxSize = blockCount;
                }
            }
        }
    }
    
    return maxSize;
}