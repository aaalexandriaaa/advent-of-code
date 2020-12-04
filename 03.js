const fs = require('fs');
const strArray = fs.readFileSync('day03.txt', 'utf8').split('\n');

console.log(strArray[0][0])
let position = 0
let trees = 0;
strArray.forEach((ele, idx, arr) => {
    if (ele[position] === '.') {
        console.log("FREE")
    } else if (ele[position]==='#'){
        console.log("TREE")
        trees++
    }
    if (position < 28) {
        position += 3
    } else {
        position -=28
    }
})
console.log(trees)