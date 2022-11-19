function solution(A) {  
    let minAvg = -1; 
    let minI = 0;
    let i; 
    let tempAvg;
    
    if (A.length > 1 ) {
        minAvg = (A[0] + A[1]) / 2;
    }

    for (i = 0; i < A.length - 1; i++) {
        tempAvg = (A[i] + A[i + 1]) / 2; 

        if (tempAvg < minAvg) {
            minAvg = tempAvg;
            minI = i;
        }
        
        if (i < A.length - 2) {
            tempAvg = (A[i] + A[i+1] + A[i+2]) / 3;

            if (tempAvg < minAvg) {
                minAvg = tempAvg;
                minI = i;
            }          
        }   
    }
    
    return minI;
}