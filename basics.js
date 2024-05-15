// Initialize variables for Mark's and John's masses (in kg) and heights (in meters)
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// Calculate BMI for Mark and John using the formula: weight (kg) / (height (m) * height (m))
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Output the calculated BMIs for Mark and John
console.log(BMIMark, BMIJohn);

// Compare Mark's BMI with John's BMI using relational operator ">" (greater than)
console.log(BMIMark > BMIJohn);
