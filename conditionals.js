// Variables for Mark's mass (in kg) and height (in meters)
const massMark = 78;
const heightMark = 1.69;

// Variables for John's mass (in kg) and height (in meters)
const massJohn = 92;
const heightJohn = 1.95;

// Calculate BMI for Mark and John using the formula: weight (kg) / (height (m) * height (m))
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Output the calculated BMIs for Mark and John
console.log("Mark's BMI:", BMIMark, "John's BMI:", BMIJohn);

// Compare Mark's BMI with John's BMI
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Calculate average scores for Dolphins and Koalas
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// Determine the winner based on average scores
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

// Calculate tip based on bill amount
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// Output the bill, tip, and total amount
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Comparison of strict equality
const a = 23;
const b = 23;

// Check if a is strictly equal to b (same value and same data type)
if (a === b) {
    console.log("Strict comparator"); // Output if a is strictly equal to b
}

// Comparison of loosely equality
const c = '23'; // String '23'
const d = 23;   // Number 23

// Check if c is loosely equal to d (equal value, but possibly different data types, converted if necessary)
if (c == d) {
    console.log("loosely comparator"); // Output if c is loosely equal to d
}
