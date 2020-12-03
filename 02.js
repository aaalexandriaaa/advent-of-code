const fs = require('fs');
let strArray = fs.readFileSync('02.txt', 'utf8').split('\n');

let count = 0;
strArray.forEach((ele, idx, ar) => {
    strArray[idx] = ele.split(" ");
    strArray[idx][0] = strArray[idx][0].split('-');
    let instance = strArray[idx][2].split('').filter(x => x == strArray[idx][1][0]).length;
    let min = parseInt(strArray[idx][0][0], 10);
    let max = parseInt(strArray[idx][0][1], 10);
        if ((min <= instance) && (instance <= max)) {
            count++;
        }
})
console.log("COUNT01", count);

//////////////////////////////////////////////////////////////////////////////
// Part 2 //
//////////////////////////////////////////////////////////////////////////////
count = 0;
strArray.forEach((ele, idx, ar) => {
//     strArray[idx] = ele.split(" "); (this line of code is redundant when the above code has been run)
//     strArray[idx][0] = strArray[idx][0].split('-'); (this line of code is redundant when the above code has been run)
    letter = strArray[idx][1][0];
    let min = parseInt(strArray[idx][0][0], 10) - 1;
    let max = parseInt(strArray[idx][0][1], 10) - 1;
    if (((strArray[idx][2][max] !== letter) && (strArray[idx][2][min] === letter)) || ((strArray[idx][2][max] === letter) && (strArray[idx][2][min] !== letter))) {
        count++;
    }
})
console.log("COUNT02", count);