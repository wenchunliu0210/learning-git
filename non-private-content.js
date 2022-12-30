;(function () {
  'use strict'

  // array.sort practice
  const arrNum = [4, 2, 1, 3, 5]
  arrNum.sort((a, b) => a - b)
  console.log('An array ordered by ASC(ascend): ', arrNum) // [1, 2, 3, 4, 5]
  arrNum.sort((a, b) => b - a)
  console.log('An array ordered by DESC(descend): ', arrNum) // [5, 4, 3, 2, 1]

  const asc = 1,
    desc = -1
  arrNum.sort((a, b) => {
    return (a === b ? 0 : a > b ? 1 : -1) * asc
  })
  console.log('An array that also ordered by ASC(ascend): ', arrNum) // [1, 2, 3, 4, 5]
  arrNum.sort((a, b) => {
    return (a === b ? 0 : a > b ? 1 : -1) * desc
  })
  console.log('An array that also ordered by DESC(descend): ', arrNum) // [5, 4, 3, 2, 1]

  const arrStr = ['Orange', 'grape', 'Apple', 'Mango', 'Banana', 'blueberry']
  arrStr.sort((a, b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    return a.localeCompare(b) * asc
  })
  console.log('An string array ordered by asc: ', arrStr) // ['Apple', 'Banana', 'blueberry', 'grape', 'Mango', 'Orange']

  arrStr.sort((a, b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    return a.localeCompare(b) * desc
  })
  console.log('An string array ordered by desc: ', arrStr) // ['Orange', 'Mango', 'grape', 'blueberry', 'Banana', 'Apple']
})()
