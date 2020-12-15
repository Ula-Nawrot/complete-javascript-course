//Challenge 1 and 2

// let marksWeight = 78;
// let marksHeight = 1.69;
// let johnsWeight = 92;
// let johnsHeight = 1.95;

// let marksWeight = 95;
// let marksHeight = 1.88;
// let johnsWeight = 85;
// let johnsHeight = 1.76;

// let marksBMI = marksWeight / marksHeight ** 2;
// let johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(marksBMI, johnsBMI)

// let markHigherBMI = marksBMI > johnsBMI;

// console.log(markHigherBMI);

// if(marksBMI > johnsBMI){
//     console.log(`Mark's BMI (${marksBMI}) is higher than John's!`);
// }else if(marksBMI < johnsBMI){
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's!`);
// }else {
//     console.log(`Theirs BMI are equal.`);
// }

//Challenge 3

// const averageScoreDelphins = (97 + 112 + 101)/3;
// const averageScoreKoalas = (109 + 95 + 106)/3;
// console.log (`Delphins got ${averageScoreDelphins} scores. Koalas got ${averageScoreKoalas} scores.`);

// if (averageScoreKoalas > averageScoreDelphins && averageScoreKoalas >= 100) {
//     console.log(`The winner is Koalas' team.`);
// } else if (averageScoreDelphins > averageScoreKoalas && averageScoreDelphins >= 100) {
//     console.log(`The winner is Delphin's team.`);
// } else if (averageScoreKoalas === averageScoreDelphins && averageScoreDelphins >= 100 && averageScoreKoalas >= 100) {
//     console.log(`There is a draw.`);
// } else {
//     console.log(`No one wins the trophy 😥`)
// }

//Challenge 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

