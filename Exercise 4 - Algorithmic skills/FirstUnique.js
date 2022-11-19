function solution(A) {  
    const numberOfOcurrenciesMap = new Map();
    const uniqueList = new Set();
  
    for (let num of A) {
        let count = numberOfOcurrenciesMap.get(num) || 0;
        
        count++;
  
        numberOfOcurrenciesMap.set(num, count);
  
        if (count === 1) {
            uniqueList.add(num);
        } else {
            uniqueList.delete(num);
        }
    }
  
    return uniqueList.size > 0 ? uniqueList.values().next().value : -1;
}