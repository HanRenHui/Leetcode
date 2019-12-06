// _   _      _ _    __        __         _     _ 
// | | | | ___| | | __\ \      / /__  _ __| | __| |
// | |_| |/ _ \ | |/ _ \ \ /\ / / _ \| '__| |/ _` |
// |  _  |  __/ | | (_) \ V  V / (_) | |  | | (_| |
// |_| |_|\___|_|_|\___/ \_/\_/ \___/|_|  |_|\__,_|


var decodeAtIndex = function (S, K) {
  debugger
  let size = 0n
  for (let i = 0, len = S.length; i < len; i++) {
    let char = S[i]
    if (isNum(char)) {
      size *= BigInt(char)
    } else {
      size++
    }
  }
  K = BigInt(K)
  for (let i = S.length - 1; i >= 0; i--) {
    K = K % size
    let cur = S[i]
    if (K == 0 && !isNum(cur)) return cur
    if (!isNum(cur)) {
      size--
    } else {
      size /= BigInt(cur)
    }
  }
  return ''
};
function isNum(s) {
  return /\d/.test(s)
}