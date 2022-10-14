const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

if (!Array.isArray(members)) return false

let result = 
members
.filter((el)  => {return typeof el == 'string'})
.map((el) => {return el.replace(/\s/g, '')[0].toUpperCase()})
.sort((a,b) => {return a.charCodeAt(0) - b.charCodeAt(0)})
.join('')

return result
}

let object = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]
console.log(createDreamTeam(object))


module.exports = {
  createDreamTeam
};
