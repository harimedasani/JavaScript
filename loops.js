const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  //using for loop
  for (let i = 0; i < bills.length; i++) {
      tips[i] = calcTip(bills[i]);
      totals[i] = tips[i] + bills[i];
  }

  // Initialize the index for the while loop
let j = 0;

// Use a while loop to iterate through the bills array
while (j < bills.length) {
    // Calculate the tip for the current bill
    tips[j] = (calcTip(bills[j]));
    // Calculate the total amount (bill + tip) for the current bill
    totals[j] = tips[j] + bills[j];
    // Move to the next index
    j++;
}
