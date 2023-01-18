/*********************
 * Array.findLastIndex()
 *********************/
function isPrime (element) {
  if (element % 2 === 0 || element < 2) return false

  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false
    }
  }

  return true
}

const numbers = [58, 90, -2, 2, 7, 8, 32, 169]

console.log(numbers.findLastIndex(isPrime)) // 4

// NOTE!!! Array.findLastIndex() is not supported in Node.js version < 18.0.0
