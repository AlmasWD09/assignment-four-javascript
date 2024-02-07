
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
const result1 = calculateMoney(10);
console.log(result1);



// ==== assignment part two ====
function checkName(name) {
    // ======== validation part start ===========
    // ======== validation part end =============

}




// ==== assignment part three ====
function deleteInvalids(array) {
    // ======== validation part start ===========
    // ======== validation part end =============
    // You have to write your code here
}

// const password = {
//     name: 'rahat',
//     birthYear: 2002,
//     siteName: 'Facebook'
// }
// console.log(Object.values(password));


// ==== assignment part four ====
function password(obj) {

}
password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' })
// password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' })
// password({ name: toky , birthYear: 200, siteName: Facebook })
// password({ name: 'maisha' , birthYear: 2002 } )



// ==== assignment part five ====
function monthlySavings(arr, livingCost) {
    // ======== validation part start ===========
    // ======== validation part end =============
    // You have to write your code here
}


