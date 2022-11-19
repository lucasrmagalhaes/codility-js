function solution(A) {
    const a = [...new Set(A.filter(a => a > 0).sort((a, b) => a - b))];
   
    for (let i = 0; i <= a.length; i++) {
        if (a[i] !== i + 1) {
            return i + 1;
        }
    }
}