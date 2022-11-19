function solution(S) {
    let result = '';
  
    const strArray = S.split('');
  
    for (const char of strArray) {
      const lastResultCharIndex = result.length - 1;
      const lastResultChar = result[lastResultCharIndex];
  
      if (char === lastResultChar) result = result.substring(0, lastResultCharIndex);
      else result += char;
    }
  
    return result;
}