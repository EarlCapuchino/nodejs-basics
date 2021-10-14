//MODULES - Encapsulated code (only share minimum)
//only share what you want
//common JS - every file in module(default)

//require will let you share things

const names = require('./4-name');
const c = require('./5-utils')
require('./7-sum') //kahit walang export function
const data = require('./6-alternative-export')
console.log(data)
console.log(names)
c(names.earl)
c(names.sam)