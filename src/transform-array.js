const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
if (!Array.isArray(array)) {
  throw new Error(`'arr' parameter must be an instance of the Array!`);
}
let result=[]
for (i=0; i<array.length; i++) {
  switch (array[i]) {
    case '--discard-next':
      array[i+1] = undefined
      i++
      break;
    case '--discard-prev':
      if (result.length && array[i-2] !== '--discard-next') result.pop()
        break;
    case '--double-next':
      if (array[i+1]) result.push(array[i+1])
      break;
    case '--double-prev':
      if (result.length && array[i-1]) result.push(array[i-1])
      break;
     default: 
     if (array[i] ) result.push(array[i])
     console.log(array[i])
     break;
  }
}
return result
}

module.exports = {
  transform
};
