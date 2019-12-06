const exclusiveTime = (n, logs) => {
  let stack = []
  let rs = new Array(n).fill(0)
  for (let i = 0, len = logs.length; i < len ; i++) {
    let [id, flag, time] = logs[i].split(':')
    time = parseInt(time)
    if (!stack.length) {
      stack.push({id, time, subTime: 0})
    } else {
      if (flag === 'start') {
        stack.push({id, time, subTime: 0})
      } else {
        let { id: startid, time: starttime, subTime} = stack.pop() 
        let duration = time - starttime + 1 - subTime
        rs[startid] += duration 
        if (stack.length) {
          stack.forEach(item => item.subTime += duration)
        }
      }
    }
  }
  return rs 
};