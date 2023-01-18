/*********************
 * Array.find()
 *********************/

const members = [{
  name: 'Abby',
  gender: 'female'
}, {
  name: 'Betty',
  gender: 'female'
}, {
  name: 'Catie',
  gender: 'female'
}, {
  name: 'Doris',
  gender: 'female'
}, {
  name: 'Emma',
  gender: 'female'
}, {
  name: 'George',
  gender: 'male'
}, {
  name: 'Fred',
  gender: 'male'
}, {
  name: 'Henry',
  gender: 'male'
}]

console.log(members.find(member => member.gender === 'male')) // { name: 'George', gender: 'male' }
