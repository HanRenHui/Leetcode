/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  let rs = []
  const next = (ids) => {
    if (!ids.length) return 
    ids.forEach(id => {
      if (pid.includes(id)) rs.push(id)
    })
    let children = []
    for (let i = 0; i < pid.length; i++) {
      if(ids.includes(ppid[i])) children.push(pid[i])
    }
    next(children)
  }
  next([kill])
  return rs 
};

