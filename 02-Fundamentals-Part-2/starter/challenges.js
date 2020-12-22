// Challenge 1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
// //const koalaAverage = calcAverage(65, 54, 49);
// const koalaAverage = calcAverage(23, 34, 27);
// //const delphinsAverage = calcAverage(44, 23, 71);
// const delphinsAverage = calcAverage(85, 54, 41);
// console.log(`Koalas have an average of ${koalaAverage} and dolphins have an average of ${delphinsAverage}`);

// function checkWinner(koalaAverage,delphinsAverage) {
//     if (koalaAverage / 2 >= delphinsAverage){
//         console.log(`Koalas team wins the match with score of ${koalaAverage}!`)
//     } else if (delphinsAverage / 2 >= koalaAverage) {
//         console.log(`Delphins team wins the match with score of ${delphinsAverage}!`)
//     } else {
//         console.log(`No one wins the match.`)
//     }
// }

// checkWinner(koalaAverage, delphinsAverage);

//Chalange 2

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         console.log(`You bill is ${bill} and tip is ${tip}, in total you pay ${bill + tip}`);
//         return tip
//     } else {
//         const tip = bill * 0.2;
//         console.log(`You bill is ${bill} and tip is ${tip}, in total you pay ${bill + tip}`);
//         return tip
//     }
// }

// //Using Conditional (Ternary) Operator
// // const calcTip = function (bill) {
// //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// //console.log(calcTip(bills[0]))


//Challenge Developer Skills

//1)Understanding a problem
// - you give an array of temperatures
// - you recieve a string with all the temperatures
//2) Break it up into sup-problems - what exactly you have to do
// - create an array
// - create a function with a parameter which is an array
// - create a for loop
// - 

// let temps = [17, 21, 23];

// function printForcast (temperatures){
    
//     const forcast = `... ${temperatures[0]} in 1 day ... ${temperatures[1]} in 2 days ... ${temperatures[2]} in 3 days ...`;
//     console.log(forcast);
// }


// Challenge 3

//1)Understanding a problem
// - create two obecjects
// - then create if else statement and check which BMI is higher
//2) Break it up into sup-problems - what exactly you have to do
// - create an object
// - add full name, mass, and height
// - create a method

// const mark = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (){
//         return this.bmi = this.mass/(this.height **2);
//     },
// };

// const jonas = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,
//     calcBMI: function (){
//         return this.bmi = this.mass/(this.height **2);
//     },
// };
// mark.calcBMI();
// jonas.calcBMI()

// if (mark.bmi > jonas.bmi){
//     console.log(`Mark's BMI (${mark.bmi}) is higher than Jonas's (${jonas.bmi})!`);
// } else if (jonas.bmi > mark.bmi) {
//     console.log(`Jonas's (${jonas.bmi}) is higher than Mark's BMI (${mark.bmi})!`);
// }

// console.log(mark.bmi, jonas.bmi);

//Challenge 4

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        console.log(`Your bill is ${bill} and tip is ${tip}, in total you pay ${bill + tip}`);
        return tip
    } else {
        const tip = bill * 0.2;
        console.log(`Your bill is ${bill} and tip is ${tip}, in total you pay ${bill + tip}`);
        return tip
    }
}

for(let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  total.push(tip + bill[i]);

}

console.log(tips, total);
