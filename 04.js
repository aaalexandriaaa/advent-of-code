const fs = require('fs');
let strArrayInput = fs.readFileSync('day04.txt', 'utf8').split('\n'); 
let strArray = [];
for (let i = 0; i < 11; i++){
    strArray.push(strArrayInput[i])
}
console.log(strArray)

let inputs = 0; // number of the 8 inputs present
let passports = 0;  // number of passports that have 7 inputs (not including CID)
let northPolian = false;
strArray.forEach((ele, idx, arr) => {
    // console.log(ele)
    // console.log(passport)
    // passport++
    if (!ele.length) {
        console.log("LENGTH")
    } else {
        console.log("NO LENGTH")
    }
})

// plan : go through each line
// find the north pole passport phrase
// also find the other 7 phrase
// keep count of those phrases
// and then add to the count

// for each
// if line is blank:
// if northPolian === true &&  inputs === 7 - passports++
// if northPolian === false && inputs === 8 - passports++
// THEN reset inputs(set North Polian to true)
// else: 
// look for ('byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid') and inputs++ when finding any of these inputs
// if CID is present, northPolian should equal false. Otherwise, we assume north pole native
// 