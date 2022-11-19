function solution(X, Y, D) {
    if (X >= Y) {
        return 0;
    }
    
    if ((X + D) >= Y) {
        return 1;
    }
    
    if (X == 1 && D == 1) {
        return Y - 1;
    } 
 
    return Math.ceil((Y / D) - (X / D));
}