const fs = require('fs');
let strArray = fs.readFileSync('day04.txt', 'utf8').split('\n'); 

// this code is for easier debugging
// let strArray = [];
// for (let i = 0; i < 12; i++){
//     strArray.push(strArrayInput[i])
// }
// console.log(strArray)

let inputs = 0; // number of the 8 inputs present
let passports = 0;  // number of passports that have 7 inputs (not including CID)
let northPolian = true;
strArray.forEach((ele, idx, arr) => {
    if (!ele.length) {
        console.log("NEW LINE")
        if (((northPolian) && (inputs === 7))||((!northPolian) && (inputs === 8))) {
            passports++;
        }
        inputs = 0;
        northPolian = true;
    } else {
        ele.search('byr')>-1 ? inputs++ : inputs
        ele.search('iyr')>-1 ? inputs++ : inputs
        ele.search('eyr')>-1 ? inputs++ : inputs
        ele.search('hgt')>-1 ? inputs++ : inputs
        ele.search('hcl')>-1 ? inputs++ : inputs
        ele.search('ecl')>-1 ? inputs++ : inputs
        ele.search('pid')>-1 ? inputs++ : inputs
        if (ele.search('cid') > -1) {
            inputs++
            northPolian=false
        }
        console.log(inputs)
        console.log("NORTH POLE?", northPolian)
    }
    console.log("PPs",passports)
})
console.log("PPs",passports)

