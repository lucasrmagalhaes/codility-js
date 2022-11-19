function getHeightFromNode(node) {
    if (!node) {
        return 0;
    }
  
    const leftHeight = getHeightFromNode(node.l);
    const rightHeight = getHeightFromNode(node.r);
  
    return Math.max(leftHeight, rightHeight) + 1;
}
  
function solution(T) {
    return getHeightFromNode(T) - 1;
}