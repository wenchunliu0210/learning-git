/*********************
 * Array.findLast()
 *********************/
const numbers = [-3, -7, 24, 49, 61, 20, 79, 81]

const isPrime = (element) => {
  if (element % 2 === 0 || element < 2) return false

  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) return false
  }

  return true
}

console.log(numbers.findLast(isPrime)) // 79

// NOTE!!! Array.findLastIndex() is not supported in Node.js version < 18.0.0
