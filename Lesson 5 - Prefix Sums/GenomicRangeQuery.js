function solution(S, P, Q) {
    let A, C, G, T;
    let i; 
    let count = [];
    let tmpR, tmpS, tmpE;
    let = result = [];
    
    A = C = G = T = 0;
    
    count.push([0, 0, 0, 0]);

    for (i = 0; i < S.length; i++ ) {
        switch(S[i]) {
            case 'A': {   
                A++;
                break;
            }
            
            case 'C': {
                C++;
                break;
            }
            
            case 'G': {
                G++;
                break;
            }
            
            case 'T': {
                T++;
                break;
            }
        }

        count.push([A, C, G, T]);
    }
    
    for (i = 0; i < P.length; i++) {
        tmpS = count[P[i]];
        tmpE = count[Q[i] + 1];

        tmpR = tmpE[0] - tmpS[0];

        if (tmpR > 0) {
            result.push(1);
            continue;
        }
        
        tmpR = tmpE[1] - tmpS[1];
        
        if (tmpR > 0) {
            result.push(2);
            continue;
        }
        
        tmpR = tmpE[2] - tmpS[2];
        
        if (tmpR > 0) {
            result.push(3);
            continue;
        }

        result.push(4);
    }
    
    return result;
}