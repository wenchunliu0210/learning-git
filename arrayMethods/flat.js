/*********************
 * Array.flat(depth)
 *********************/
const arr1 = [1, 2, [3, 4]]
const arr2 = [1, 2, [3, 4, [5, 6]]]

console.log(arr1.flat()) // [1, 2, 3, 4]
console.log(arr2.flat()) // [1, 2, 3, 4, [5, 6]]
console.log(arr2.flat(2)) // [1, 2, 3, 4, 5, 6]
console.log(arr2.flat(3)) // [1, 2, 3, 4, 5, 6]
console.log(arr2) // [1, 2, [3, 4, [5, 6]]]
