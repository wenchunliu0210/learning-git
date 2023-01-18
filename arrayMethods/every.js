/*********************
 * Array.every()
 *********************/
const familyMembers = [
  {
    name: 'Tom',
    role: 'father',
    age: 50
  },
  {
    name: 'Tina',
    role: 'mother',
    age: 48
  },
  {
    name: 'Jack',
    role: 'the eldest son',
    age: 23
  },
  {
    name: 'John',
    role: 'second son',
    age: 20
  },
  {
    name: 'June',
    role: 'the youngest daughter',
    age: 17
  }
]

const isAdult = (person) => person.age >= 18
console.log(familyMembers.every(isAdult)) // false
