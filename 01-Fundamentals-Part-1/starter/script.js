// let js = 'amazing';
// console.log(40 + 8 + 1);
// console.log('Jonas');
// console.log('23');
// let firstName = 'Kasia';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// const now = 2020;
// const ageJonas = now-1911;
// const ageThomas = now-1997;
// console.log(ageJonas, ageThomas);
// console.log(ageJonas / 3 * ageThomas ** 2); 

// const firstName = 'Ula';
// const lastName = 'Nawrot';
// const birthYear = 1990;
// let currentYear = 2020;
// const ulasData = `I'm ${firstName} ${lastName} and I'm ${currentYear - birthYear} year old.`;
// console.log(ulasData);

// //Using backticks everywhere solves the problem of changing quoatation marks when we want to put variable inside a string
// console.log(`Just a regular string`)
// //writing a new line
// console.log(`String with
// multiple
// lines`)
// const age = 15;


// if(age >= 18){
//   console.log(`Sara can start driving linces 🚗`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sara is to young. Wait another ${yearsLeft} years.`)
// }

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// const money = 0;
// if (money){
//     console.log(`Don't spend it all`)
// } else {
//     console.log(`You should find a job`)
// }

// let height;
// if (height){
//     console.log(`Heighr is defined.`)
// } else {
//     console.log(`Height is not defined.`)
// }
// const hasDrivingsLicence = true;
// const hasGoodVision = true;

// console.log(hasDrivingsLicence && hasGoodVision);
// console.log(hasDrivingsLicence || hasGoodVision);

// const shouldDrive = hasDrivingsLicence && hasGoodVision;

// // if (shouldDrive) {
// //     console.log(`Sera is able to drive.`)
// // } else{
// //     console.log(`Someone else should drive.`)
// // }

// const isTired = false;
// console.log(hasDrivingsLicence || hasGoodVision || isTired);

// if (hasDrivingsLicence && hasGoodVision && !isTired) {
//     console.log(`Sera is able to drive.`)
// } else{
//     console.log(`Someone else should drive.`)
// }

// const day = `Tuesday`;

// switch(day) {
//   case `Monday`:
//       console.log(`Don't worry! It will be over soon.`);
//       break;
//   case `Tuesday`:
//       console.log(`You see, it is already Tuesday.`);
//       break;
//   case `Wednesday`:
//       console.log(`And we are half way through.`);
//       break; 
//   case `Thursday`:
//       console.log(`Just two days letf.`);
//       break;
//   case `Friday`:
//       console.log(`And it's weekend!`);
//       break;
//   default:
//       console.log(`You have drunk too much, there is no such a day`);
// }

// const age = 24;
// // age >=18 ? console.log(`I like to drink wine.`) : console.log(`I like to drink water.`);
// const drink = age >= 18 ? `wine` : `water`; //This whole operator is an expression
// console.log(drink);

// let drink2 // it has to be defined outside of if statement because everything which is declared inside if/else statement is local variable
// if (age >= 18) {
//     drink2 = `wine`;
// } else {
//     drink2 = `water`;
// }

// console.log(`I like to drink ${ age >= 18 ? `wine` : `water`}`)