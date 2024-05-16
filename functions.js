// Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// Function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log("No team wins...");
    }
}

// Check winner for Data 1
checkWinner(scoreDolphins, scoreKoalas);

// Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// Check winner for Data 2
checkWinner(scoreDolphins, scoreKoalas);


//Anonymous function
const value = function (value1, value2) {
    return (value1+value2)/2;
} 
const avg_of_two_numbers = value(2,3);

console.log(avg_of_two_numbers);
