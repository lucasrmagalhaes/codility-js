function solution(A) {
    let map = {}

    for (let i in A) {
        if (!map[A[i]]) {
            map[A[i]] = true;
        }
    }

    return Object.keys(map).length;
}