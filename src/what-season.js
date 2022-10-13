const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date))  throw Error('Invalid date!')
  if (Object.getOwnPropertyNames(date).length > 0) throw Error('Invalid date!')
  // for (i=0; i<date.length; i++) {
  // }
  let monthNumber = date.getMonth()

  if (monthNumber < 2 || monthNumber==12 || monthNumber==11) return 'winter';
  else if (monthNumber<5) return 'spring';
  else if (monthNumber<8) return 'summer';
  else if (monthNumber<11) return 'autumn';
  

}
// console.log(getSeason(1994, 8, 26, 3, 0, 11, 500))
// console.log(new Date(2019, 11, 22, 23, 45, 11, 500))

module.exports = {
  getSeason
};
