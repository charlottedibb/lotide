/* INSTRUCTIONS
Implement the function findKey which takes in an object and a callback.
It should scan the object
and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
*/
const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
const findKey = function(object, callback) {
  for(let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;

// //TESTS
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(result1, "noma");
