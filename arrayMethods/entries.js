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
