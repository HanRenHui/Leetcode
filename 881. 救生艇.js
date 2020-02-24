/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people = people.sort((a, b) => a - b)
  let l = 0
  let r = people.length - 1
  let rs = 0
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      rs++
      l++
      r--
    } else if (people[l] + people[r] > limit) {
      rs++
      r--
    }
  }
  return rs
};