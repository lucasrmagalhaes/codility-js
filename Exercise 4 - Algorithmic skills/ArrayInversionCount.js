function mergeSort(arr, counter) {
    if (arr.length <= 1) return arr;
  
    const middleIndex = Math.round(arr.length / 2);
  
    const leftArr = mergeSort(arr.slice(0, middleIndex), counter);
    const rightArr = mergeSort(arr.slice(middleIndex), counter);
  
    const merged = [];
  
    let i = 0;
    let j = 0;
  
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        merged.push(leftArr[i]);
        i++;
      } else {
        merged.push(rightArr[j]);
        counter.swaps += leftArr.length - i;
        j++;
      }
    }
  
    return merged.concat(leftArr.slice(i)).concat(rightArr.slice(j));
  }
  
  function solution(A) {
    let counter = { swaps: 0 };
  
    mergeSort(A, counter);
  
    return counter.swaps <= 1000000000 ? counter.swaps : -1;
  }