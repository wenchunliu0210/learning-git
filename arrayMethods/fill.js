/********************* Array.fill() *********************/
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums.fill(9, 3, 4)) // [1, 2, 3, 9, 5, 6, 7]
console.log(nums) // [1, 2, 3, 9, 5, 6, 7]
console.log(nums.fill(8, 4)) // [1, 2, 3, 9, 8, 8, 8]
console.log(nums.fill(6, -1, -3)) // [1, 2, 3, 9, 8, 8, 8]
console.log(nums.fill(7, -5, -1)) // [1, 2, 7, 7, 7, 7, 8]
console.log(nums.fill(6)) // [6, 6, 6, 6, 6, 6, 6]
