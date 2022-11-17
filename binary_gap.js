function solution(N) {
  N = (N >>> 0).toString(2);

  var binaryGap = 0, gapNum = 0;

  for (var i = 0, N_len = N.length; i < N_len; i++) {
    if (parseInt(N[i])) {

      binaryGap = gapNum > binaryGap ? gapNum : binaryGap;

      if (N_len == i) {
        return binaryGap;
      }

      gapNum = 0;
    } else {
      gapNum++;
    }
  }

  return binaryGap;
}
