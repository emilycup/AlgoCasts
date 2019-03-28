// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, size + i));
    }

    return newArray;
}

module.exports = chunk;

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

// SOLUTION 1
// function chunk(array, size) {
//     let newArray = [];

//     for (let num of array) {
//         const last = newArray[newArray.length - 1];

//         if (newArray.length === 0 || last.length === size) {
//             newArray.push([num]);
//         } else {
//             last.push(num);
//         }
//     }

//     return newArray;
// }
