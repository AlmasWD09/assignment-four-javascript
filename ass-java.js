// ======== assignment one ========== OK ============
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
const result1 = calculateMoney(93);
console.log(result1);

// ========= assignment two =========== OK =============
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


// ======== assignment three ======= OK =====================
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array"
    }
    let newArry = [];
    for (const num of array) {
        if (typeof (num) === 'number' && !isNaN(num)) {
            newArry.push(num)
        }
    }
    return newArry;
}
console.log(deleteInvalids(  [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));