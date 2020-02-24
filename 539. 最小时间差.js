/**
 * @param {string[]} timePoints
 * @return {number}
 */
function transfer(time) {
  let times = time.split(':')
  let h = parseInt(times[0])
  let m = parseInt(times[1])
  return h * 60 + m 
}

var findMinDifference = function (timePoints) {
  timePoints = timePoints.map(transfer).sort((a, b) => a - b)
  let rs = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < timePoints.length; i++) {
    rs = Math.min(rs, timePoints[i] - timePoints[i-1])
  }
  
  rs = Math.min(1440 + timePoints[timePoints[0]] - timePoints[timePoints.length-1], rs  )
  return rs 
};