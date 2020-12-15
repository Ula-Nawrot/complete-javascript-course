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