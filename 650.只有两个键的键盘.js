var minSteps = function (n) {
  let dp = []
  dp[1] = 0
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = i;
    for (let j = 2; j < i; j++) {
      debugger
      if (i % j == 0) {
        let stepCount = i / j;
        dp[i] = Math.min(dp[i], dp[j] + stepCount);
      }
    }
  }
  return dp[n];
};
