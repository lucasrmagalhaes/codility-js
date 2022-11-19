function solution(H) {
	let stack = [];
    let head = -1;
    let block = 0;
    let i = 0;

    while (i < H.length) {
        let h = H[i];
        
        if (head < 0) {
            ++head;
            stack[head] = h;
            ++i;
        } else if (stack[head] == h) {
            ++i;
        } else if (stack[head] < h) {
            ++head;
            stack[head] = h;
            ++i;
        } else {
            --head;
            ++block;
        }
    }
    
    return block + head + 1;
}