const fs = require('fs');
const strArray = fs.readFileSync('day03.txt', 'utf8').split('\n');
console.log(strArray[0][7])
let position = 0
let trees = 0;
strArray.forEach((ele, idx, arr) => {
    if (ele[position] === '.') {
        // console.log("FREE")
    } else if (ele[position]==='#'){
        // console.log("TREE")
        trees++
    }
    if (position < 28) {
        position += 3
    } else {
        position -=28
    }
})
console.log(trees)

//////////////////////////////////////////////////
// Part 2
//////////////////////////////////////////////////

let posOne = 0;
let posThree = 0;
let posFive = 0;
let posSeven = 0;
let posOther = 0;

let treesOne = 0;
let treesThree = 0;
let treesFive = 0;
let treesSeven = 0;
let treesOther = 0;

strArray.forEach((ele, idx) => {

    if (ele[posOne]==='#'){
        treesOne++
    }
    if (posOne < 30) {
        posOne++
    } else {
        posOne -=30
    }

    if (ele[posThree]==='#'){
        treesThree++
    }
    if (posThree < 28) {
        posThree += 3
    } else {
        posThree -=28
        }
    
    if (ele[posFive]==='#'){
        treesFive++
    }
    if (posFive < 26) {
        posFive += 5
    } else {
        posFive -=26
    }

    if (ele[posSeven]==='#'){
        treesSeven++
    }
    if (posSeven < 24) {
        posSeven += 7
    } else {
        posSeven -=24
    }

    if ((idx%2===0)&&(ele[posOther]==='#')){
        console.log("TREE")
        treesOther++
    }
    if ((idx%2===0) && (posOther < 30)) {
        posOther++
    } else if (idx%2===0){
        posOther -=30
    }

})

console.log("one", treesOne)
console.log("Three", treesThree)
console.log("Five", treesFive)
console.log("Seven", treesSeven)
console.log("other", treesOther)

console.log(treesOne*treesThree*treesFive*treesSeven*treesOther)