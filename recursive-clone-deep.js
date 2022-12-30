import cloneDeep from 'lodash/cloneDeep.js'

function recursiveCloneDeep(target) {
  if (!target || typeof target !== 'object') return target

  let cloneObj
  if (Array.isArray(target)) {
    cloneObj = []
    for (let i = 0; i < target.length; i++) {
      cloneObj[i] = recursiveCloneDeep(target[i])
    }
    // target.forEach((item, index) => {
    //   cloneObj[index] = recursiveCloneDeep(item)
    // })
    return cloneObj
  }

  cloneObj = {}
  for (let i in target) {
    if (Object.hasOwn(target, i)) {
      cloneObj[i] = recursiveCloneDeep(target[i])
    }
  }
  return cloneObj
}

const familyTree = {
  person: 'Grandpa',
  age: 80,
  hobbies: ['sleep', 'chat', 'stroll'],
  action: () => {
    console.log('Ho ho ho! This is the papa!')
  },
  children: [
    {
      person: 'Father',
      age: 40,
      favoriteFruits: ['apple', 'banana', 'mango'],
      action: () => {
        console.log('Hello! This is the father!')
      },
      children: [
        {
          person: 'Son',
          age: 12,
          action: () => {
            console.log('Hi! This is a son and a grand son!')
          },
        },
        {
          person: 'Daughter',
          age: 10,
          action: () => {
            console.log('Hehe~ This is a daughter and a grand daughter!')
          },
        },
      ],
    },
    {
      person: 'Auntie',
      age: 36,
      hasChild: false,
      action: () => {
        console.log('Hi~ This is an auntie with no children yet!')
      },
    },
  ],
}

const copiedTree = recursiveCloneDeep(familyTree)
const lodashCloneTree = cloneDeep(familyTree)
console.log('Family Tree Copied: ', copiedTree)
copiedTree.action()
console.log(copiedTree.hobbies)
copiedTree.children[0].action()
console.log(copiedTree.children[0].favoriteFruits)
copiedTree.children[1].action()
copiedTree.children[0].children[1].action()
console.log(lodashCloneTree)
