const { object } = require("webidl-conversions");

function calculateMoney(ticketSale) {
    if (typeof (ticketSale) !== 'number') {
        return "input should be an number"
    }
    else if (ticketSale < 0) {
        return "input should be an 'Positive' number"
    }
    const ticketPrice = 120;
    const daroanCost = 500;
    const strafLunchCost = (50 * 8);
    const totalCost = (daroanCost) + (strafLunchCost);
    const result = (ticketPrice * ticketSale) - (totalCost);
    return result;
}
// const result1 = calculateMoney(10);
// console.log(result1);



// ==== assignment part two ====
function checkName(name) {
    if(typeof(name) !== 'string'){
        return "Invalid"
    }
    let newArry = name.split('');
    let lastIndex = (newArry.length-1);
    if(newArry[lastIndex].toLowerCase() === 'a' || newArry[lastIndex].toLowerCase() === 'y' || newArry[lastIndex].toLowerCase() === 'i' || newArry[lastIndex].toLowerCase() === 'e' || newArry[lastIndex].toLowerCase() === 'o' || newArry[lastIndex].toLowerCase() === 'u' || newArry[lastIndex].toLowerCase() === 'w'){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}
const result2 = checkName(['Rashed']); // RAFEE  Jhankar 199   [“Rashed”]
console.log(result2);



// ==== assignment part three ====
function deleteInvalids(array) {
    // ======== validation part start ===========
    // ======== validation part end =============
    // You have to write your code here
}




// ==== assignment part four ====
// function password(info) {
//  const words = info;
//  const objValue = Object.values(words)

 
// }
// password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' })



// ==== assignment part five ====
function monthlySavings(arr, livingCost) {
    // ======== validation part start ===========
    // ======== validation part end =============
    // You have to write your code here
}


// const password = {
//     name: 'rahat',
//     birthYear: 2002,
//     siteName: 'Facebook'
// }
// console.log(Array.isArray(password));