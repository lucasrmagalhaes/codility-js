function solution (A, B, K) {
    if (A < 0 || A > 10e9) {
        throw new Error('The first param must be between [0...2000000000]');
    }

    if (B < 0 || B > 10e9) {
        throw new Error('The second param must be between [0...2000000000]');
    }

    if (B < A) {
        throw new Error('The second param must be bigger than the first.');
    }

    if (K < 1 || K > 10e9) {
        throw new Error('The third param must be between [1...2000000000]');
    }

    let divCounter = 0;
    let firstNumber = A;
    let C = A;

    while (C <= B) {
        if (C % K == 0) {
            firstNumber = C;
            divCounter++;
            break;
        } 
        
        C++;
    }

    const diff = B - firstNumber;

    if (diff > 1) {
        const extra = diff % K;
        const extraCount = (diff - extra) / K;
        divCounter += extraCount; 
    }

    return divCounter;
}