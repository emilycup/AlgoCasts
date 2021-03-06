// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxLetter = '';
    let maxLetterCounter = 0;

    for (let char of str) {
        if (!charMap[char]) 
            charMap[char] = 1;
        else
            charMap[char]++;
    }

    for (let letter in charMap) {
        if (charMap[letter] > maxLetterCounter){
            maxLetter = letter;
            maxLetterCounter = charMap[letter];
        }
    }

    return maxLetter;
}

module.exports = maxChar;

maxChar('Hello there!');