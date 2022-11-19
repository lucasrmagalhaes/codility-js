function solution(A, B) {
    let count = 0;
    let gcd = (a, b) => a % b == 0 ? b : gcd(b, a % b);

    let check = (a, b) => {
        let div = gcd(a, b)
        let k = a / div;

        while (div % k != 0) {
            let l = gcd(div, k)
            if (l == 1) return 0
            k /= l
        }
        return 1
    }

    for (let i = 0; i < A.length; ++i) {
        count += check(A[i], B[i]) * check(B[i], A[i]);
    }

    return count;
}
