/*********************
 * Array.filter()
 *********************/
const checkLength = (arr, limit = Infinity) => {
  const notExceedLimit = (item) => item.length <= limit
  return arr.filter(notExceedLimit)
}

const fruits = ['apple', 'watermelon', 'blueberry', 'banana', 'guava']
console.log(checkLength(fruits, 9)) // ['apple', 'blueberry', 'banana', 'guava']

const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra'
  return word.length < 6
})

console.log(words) // ['spray']
console.log(modifiedWords) // ['spray', 'limit extra', 'exuberant extra', 'destruction extra', 'elite extra', 'present extra', 'undefined extra']

function LengthChecker () {
  this.arr = []
  this.limit = Infinity
}
LengthChecker.prototype.setTargetArray = function (targetArr) {
  this.arr = targetArr
}
LengthChecker.prototype.setLimit = function (limitLength) {
  this.limit = limitLength
}
LengthChecker.prototype.passLengthCheck = function () {
  const notExceedLimit = (item) => item.length <= this.limit
  return this.arr.filter(notExceedLimit)
}

const check = new LengthChecker()
check.setTargetArray(fruits)
check.setLimit(5)
console.log(check.passLengthCheck()) // ['apple', 'guava']
