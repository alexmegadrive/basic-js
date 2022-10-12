const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
console.log('options :', options);
let array = []
let stringFormat = String(str);
let repeatQuantity = options.repeatTimes || 1
// console.log('repeatQuantity :', repeatQuantity);
let repeatQuantityAdditional = options.additionRepeatTimes ? options.repeatTimes : 1
let finalSeparator = options.separator ? options.separator : '+'



  function generateString(string, times, addition, separator) {
    let result = '';
    times = times ? times : 1
    addition = addition !== undefined ? String(addition) : '';
    separator = separator ? separator : '|';
    for (let i=0; i<times; i++) {
      result = result ? result+separator+addition : string+addition
    } 
    return result
  }

let substr = generateString(stringFormat,options.additionRepeatTimes, options.addition,options.additionSeparator)
for (let i=0; i<repeatQuantity; i++) {
array.push(substr)
}
return array.join(finalSeparator)
}



console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))


module.exports = {
  repeater
};
