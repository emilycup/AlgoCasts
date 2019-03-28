// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('')
        .reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;

reverse('asdf');

    // SOLTION: MY SOLUTION
    // let newString = "";
    // for(let i = str.length ; i > 0; i--) {
    //     newString += str[i - 1];
    // }
    // return newString;

    // return newString;

    // SOLUTION 1
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // SOLUTION 2
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;
