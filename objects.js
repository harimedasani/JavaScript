// Define an object for Mark with properties fullName, mass, height, and a method calcBMI to calculate BMI
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height : 1.69,
    calcBMI : function () {
        // Calculate BMI and assign it to the object's bmi property
        this.bmi = this.mass / (this.height * this.height); 
        return this.bmi; // Return the calculated BMI
    }
}

// Define an object for John with properties fullName, mass, height, and a method calcBMI to calculate BMI
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI : function() {
        // Calculate BMI and assign it to the object's bmi property
        this.bmi = this.mass / (this.height * this.height); 
        return this.bmi; // Return the calculated BMI
    }
}

// Calculate BMI for both Mark and John by calling the calcBMI method
mark.calcBMI();
john.calcBMI();

//Accessing dot and bracket notation
console.log(mark.fullName);
console.log(john['fullName']);
//In bracket notation we can concat to get a value from key
const word = 'full'
console.log(mark[word + 'Name']);

// Compare BMI of Mark and John and log the result to the console
if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}
else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}
else{
    console.log(`Both ${john.fullName}'s BMI (${john.bmi}) and ${mark.fullName}'s (${mark.bmi}) are equal`);
}
