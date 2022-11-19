function solution(A) {
    let result = [];
    let max = 0;
    let i = 0;
    let arr = JSON.parse(JSON.stringify(A));
    
    arr.sort(function(a, b) {
        return a - b;
    });
    
    max = arr[arr.length - 1];
    
    let divs = [];
    let totals = [];
    
    for (i = 0; i <= max; i++) {
        divs[i] = false;
        totals[i] = 0;
    }
    
    for (i = 0; i < A.length; i++) {
        var k = 0;
        
        divs[A[i]] = true;
        totals[A[i]]++;
    }
    
    for (i = 0; i < A.length; i++) {
        for(k = 2; A[i] * k <= max; k++) {
            if (divs[A[i] * k]) {
                totals[A[i] * k]++;
            }
        }
    }
    
    for (i = 0; i <A.length; i++) {
        result.push(A.length - totals[A[i]]);
    }
    
    return result;
}