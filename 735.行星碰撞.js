/**
* @param {number[]} asteroids
* @return {number[]}
*/
 function fn(left, right) {
   return left > 0 && right < 0 && Math.abs(left - right) > (right + left)
 }
 var asteroidCollision = function (asteroids) {
   let stack = []
   for (let i = 0, len = asteroids.length; i < len; i++) {
     let cur = asteroids[i]
     if (!stack.length) {
       stack.push(cur)
     } else {
       let top = stack[stack.length - 1]
       if (!fn(top, cur)) {
         stack.push(cur)
       } else {
         while (Math.abs(top) <= Math.abs(cur) && fn(top, cur)) {
           stack.pop()
           if (Math.abs(top) === Math.abs(cur)) cur = undefined 
           top = stack[stack.length-1]
         }
         if (!fn(top, cur) && cur) stack.push(cur)
       }
     }
   }
   return stack
 };