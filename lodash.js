//installed first //install dependencies
const _ = require('lodash');

const items = [1,[2,3,[4]]]
const newItems = _.flattenDeep(items); // a function from lodash
console.log(newItems)