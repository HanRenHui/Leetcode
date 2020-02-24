/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder = folder.sort((a,b) =>  a < b)
  let rs = []
for (let i = 1; i < folder.length; i++) {
  let cur = folder[i] + '/'
  let pre = folder[i-1] + '/'
  if (cur.startsWith(pre)) {
    folder.splice(i, 1)
    i--
  } 
}  
return folder
};