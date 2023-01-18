/*********************
 * Array.findIndex()
 *********************/
const fruits = ['apple', 'banana', 'guava', 'mango', 'apple', 'pineapple']

console.log(fruits.findIndex(fruit => fruit === 'apple')) // 0

function isPrime (num) {
  if (num % 2 === 0 || num < 2) return false

  for (let factor = 3; factor <= Math.sqrt(num); factor += 2) {
    if (num % factor === 0) return false
  }
  return true
}

const numbers = [1, 8, 9, 121, 67, 120, 3, 55]
console.log(numbers.findIndex(isPrime)) // 4
