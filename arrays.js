//creating an arrays
const bills = [125, 555, 44];
const tips = []
const totals = []

function calcTip(bill_value) {
    //calculating the tip value based on Ternary operation
    const tip = bill_value >=50 && bill_value <=300 ? bill_value * (15/100) : bill_value * (20/100);
    //pushing values into the arrays
    tips.push(tip);
    totals.push(bill_value + tip);
    //returning the tip value
    return tip;
}

// More about arrays and few methods
// Another way of declaring arrays
const years = new Array(2000, 2001, 2002);

console.log(years);

// so many methods are available in array below are few of them
// Append element at the end
years.push(2003);
console.log(years);

// Pop the last element in the array
years.pop();
console.log(years);

// Unshift method adds an element at the start
years.unshift(1999);
console.log(years);

// Shift method removes an element from the start
years.shift();
console.log(years);

// indexOf method checks at which index a value is present
index_value = years.indexOf(2000);
console.log(index_value);

// includes method checks whether a value is present
check = years.includes(2001);
console.log(check);