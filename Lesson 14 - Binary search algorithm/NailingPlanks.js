function solution(A, B, C) {
    var maxB = 0;
    var min = 0;
    var max = C.length;
    var atLeastOne = false;
    var i = 0;
    var totalNails = [];
    
    if(C.length === 1) {
        if(A[0] <= C[0] && C[0] <= B[0]) {
            return 1;
        } else {
            return -1;
        }
    }
    
    for(i=0; i<A.length; i++) {
        maxB = Math.max(maxB, B[i]);
    }
    
    for(i=0; i<=maxB; i++) {
        totalNails[i] = 0;
    }
    
    while(min <= max) {
        var mid = parseInt((min + max) / 2);
        
        for(i=0; i<totalNails.length; i++) {
            totalNails[i] = 0;
        }
        
        for(i=0; i<mid; i++) {
            totalNails[C[i]] = 1;
        }
        
        for(i=1; i<totalNails.length; i++) {
            totalNails[i] += totalNails[i-1];
        }
        
        var result = allNailed(A, B, totalNails);
        
        if(result) {
            atLeastOne = true;
            if(max === mid) {
                break;
            }
            
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    
    if(!atLeastOne) {
        return -1;
    } else {    
        return min;
    }
}

function allNailed(arrA, arrB, totalNails) {
    for(var i=0; i<arrA.length; i++) {
        if(totalNails[arrA[i]-1] === totalNails[arrB[i]]) {
            return false;
        }
    }
    
    return true;
}