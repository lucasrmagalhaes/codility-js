const solution = (arr) => {
    let firstHalf = 0;
    let secondHalf = arr.reduce((a, b) => a + b);
    let smallestDiff = 2001;
    
    for (let i = 0; i < arr.length - 1; i ++) {
        firstHalf += arr[i];
        secondHalf -= arr[i];

        let currentDiff = Math.abs(firstHalf - secondHalf);

        if (currentDiff < smallestDiff) {
            smallestDiff = currentDiff
        }
    }

    return smallestDiff;
}