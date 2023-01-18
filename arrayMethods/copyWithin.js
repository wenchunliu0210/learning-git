/*********************
 * Array.copyWithin()
 *********************/
const arrABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const copyPartial = arrABC.copyWithin(1)
console.log(arrABC) // ['a', 'a', 'b', 'c', 'd', 'e', 'f']
console.log(copyPartial) // ['a', 'a', 'b', 'c', 'd', 'e', 'f']
const copyPartial2 = arrABC.copyWithin(-3, 1, 4)
console.log(arrABC) // ['a', 'a', 'b', 'c', 'a', 'b', 'c']
console.log(copyPartial2) // ['a', 'a', 'b', 'c', 'a', 'b', 'c']
const arrLikeObj = {
  length: 5,
  3: 1
}
Array.prototype.copyWithin.call(arrLikeObj, 0, 3)
console.log(arrLikeObj) // { '0': 1, '3': 1, length: 5 }
Array.prototype.copyWithin.call(arrLikeObj, 3, 1)
console.log(arrLikeObj) // { '0': 1, length: 5 }
// eslint-disable-next-line no-sparse-arrays
const arrSparse = ['hi', , 'hello', 'hey']
console.log(arrSparse.copyWithin(2, 1)) // ['hi', <2 empty items>, 'hello']
