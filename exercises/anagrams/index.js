// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return buildCleanString(stringA) === buildCleanString(stringB);
}

function buildCleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}


module.exports = anagrams;

anagrams('Hi there', 'Bye there');


// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// /**
//  * Build character map from a string and remove all white spaces 
//  * and special characters.
//  * 
//  * @param {*} str 
//  */
// function buildCharMap(str) {
//     // str = str.replace(/[^\w]/g, '').toLowerCase();
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         if (!charMap[char]) {
//             charMap[char] = 1;
//         } else {
//             charMap[char]++;
//         }
//     }

//     return charMap;
// }