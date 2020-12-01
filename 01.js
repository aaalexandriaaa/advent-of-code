// challenge: take file in, find the 2 entries that sum to 2020, then multiply those two numbers together

const fs = require('fs');
const { type } = require('os');
const { parse } = require('path');

const strArray = fs.readFileSync('day1.txt', 'utf8').split('\n');
// actually take the file in, notes the encoding option. then split on carriage return
let numArray = strArray.map(Number);

// numArray.forEach((ele) => {
//     numArray.forEach((e) => {
//         if ((ele + e) === 2020) {
//             console.log(ele * e)
//             console.log(ele)
//             console.log(e)
//             return ele*e
//         }
//     })
// })
// The complexity of this isn't great (notice I get the answer twice). 

for (let i = 0; i < numArray.length; i++){
    for (let j = i + 1; j < numArray.length; j++){
        if ((numArray[i] + numArray[j]) === 2020) {
            console.log(numArray[i]*numArray[j])
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
// Part 2 //
//////////////////////////////////////////////////////////////////////////////

// Same thing as above, but now we check for 3 numbers that sum to 2020

// brute forcing this, I guess?

for (let i = 0; i < numArray.length; i++){
    for (let j = i + 1; j < numArray.length; j++){
        for (let k = j + 2; k < numArray.length; k++){
            if (((numArray[i] + numArray[j] + numArray[k]) === 2020) && (numArray[i]*numArray[j]*numArray[k] !==0)) {
                console.log(numArray[i]*numArray[j]*numArray[k])
            }
        }
    }
}



