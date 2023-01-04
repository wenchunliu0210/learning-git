/********************* Array.concat() *********************/
const arrNum1 = [1, 2, 3]
const arrNum2 = [4, 5, 6]
const arrNum3 = arrNum1.concat(arrNum2)
const arrNum4 = arrNum2.concat(arrNum1)
console.log(arrNum1) // [1, 2, 3]
console.log(arrNum2) // [4, 5, 6]
console.log(arrNum3) // [1, 2, 3, 4, 5, 6]
console.log(arrNum4) // [4, 5, 6, 1, 2, 3]
