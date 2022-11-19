function solution(S) {
    let counter = 0;
    
    for (let i = 0; i < S.length; i++) {
        switch(S[i]) {
            case "(": {
                counter++;
                break;
            }

            case ")": {
                counter--;
                break;
            }
        }
        
        if (counter < 0) {
            return 0
        }
    }
    
    return counter === 0 ? 1 : 0;
}