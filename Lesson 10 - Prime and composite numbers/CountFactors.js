function solution(N) {
    let i;
    let NumFactors = 0;
  
    for (i = 1; i * i < N; i++) {
        if (N % i == 0) {
            NumFactors += 2;
        }
    }
  
    if (i * i == N) {
        NumFactors++;
    }
  
    return NumFactors
}