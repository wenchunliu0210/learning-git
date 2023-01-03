/********************* Array.at() *********************/
const fruits = ['apple', 'banana', 'mango', 'strawberry', 'guava', 'kiwi']
console.log(fruits.at(0)) // apple
console.log(fruits.at(-1)) // kiwi
console.log(fruits.at(8)) // undefined

/********************* Array.concat() *********************/
const arrNum1 = [1, 2, 3]
const arrNum2 = [4, 5, 6]
const arrNum3 = arrNum1.concat(arrNum2)
const arrNum4 = arrNum2.concat(arrNum1)
console.log(arrNum1) // [1, 2, 3]
console.log(arrNum2) // [4, 5, 6]
console.log(arrNum3) // [1, 2, 3, 4, 5, 6]
console.log(arrNum4) // [4, 5, 6, 1, 2, 3]

/********************* Array.copyWithin() *********************/
const arrABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const copyPartial = arrABC.copyWithin(1)
console.log(arrABC) // ['a', 'a', 'b', 'c', 'd', 'e', 'f']
console.log(copyPartial) // ['a', 'a', 'b', 'c', 'd', 'e', 'f']
const copyPartial2 = arrABC.copyWithin(-3, 1, 4)
console.log(arrABC) // ['a', 'a', 'b', 'c', 'a', 'b', 'c']
console.log(copyPartial2) // ['a', 'a', 'b', 'c', 'a', 'b', 'c']
const arrLikeObj = {
  length: 5,
  3: 1,
}
Array.prototype.copyWithin.call(arrLikeObj, 0, 3)
console.log(arrLikeObj) // { '0': 1, '3': 1, length: 5 }
Array.prototype.copyWithin.call(arrLikeObj, 3, 1)
console.log(arrLikeObj) // { '0': 1, length: 5 }
const arrSparse = ['hi', , 'hello', 'hey']
console.log(arrSparse.copyWithin(2, 1)) // ['hi', <2 empty items>, 'hello']

/********************* Array.entries() *********************/
const names = ['John', 'Doe', 'Peeping', 'Tom']
const iterator = names.entries()
console.log(iterator.next().value) // [0, 'John']
console.log(iterator.next().value) // [1, 'Doe']
console.log(iterator.next().value) // [2, 'Peeping']
console.log(iterator.next().value) // [3, 'Tom']

// 0 John
// 1 Doe
// 2 Peeping
// 3 Tom
for (const [index, element] of names.entries()) {
  console.log(index, element)
}

/********************* Array.every() *********************/
const familyMembers = [
  {
    name: 'Tom',
    role: 'father',
    age: 50,
  },
  {
    name: 'Tina',
    role: 'mother',
    age: 48,
  },
  {
    name: 'Jack',
    role: 'the eldest son',
    age: 23,
  },
  {
    name: 'John',
    role: 'second son',
    age: 20,
  },
  {
    name: 'June',
    role: 'the youngest daughter',
    age: 17,
  },
]

const isAdult = (person) => person.age >= 18
console.log(familyMembers.every(isAdult)) // false

/********************* Array.fill() *********************/
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums.fill(9, 3, 4)) // [1, 2, 3, 9, 5, 6, 7]
console.log(nums) // [1, 2, 3, 9, 5, 6, 7]
console.log(nums.fill(8, 4)) // [1, 2, 3, 9, 8, 8, 8]
console.log(nums.fill(6, -1, -3)) // [1, 2, 3, 9, 8, 8, 8]
console.log(nums.fill(7, -5, -1)) // [1, 2, 7, 7, 7, 7, 8]
console.log(nums.fill(6)) // [6, 6, 6, 6, 6, 6, 6]
