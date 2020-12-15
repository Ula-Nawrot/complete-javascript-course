'use strict';
//possible to reusing the code
// function logger() {
//   console.log(`My name is Jonas.`)
// }
// //invoking / calling / running the function
// logger(); 
// logger();

// //receiving or returning data 

// function fruitProcessor(apples, oranges) {
//       const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice; // tą wartość przypisuje do funkcji, czyli jest to wartość funcji
// }

// const appleJuice = fruitProcessor(5, 0); // we have to save the value of the function in another variable
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0)); 

// const appelOrangeJuice = fruitProcessor(2, 4);
// console.log(appelOrangeJuice);

// Function declaration - the adventage of it is that they can be called before there are defined

// const age1 = calcAge1(1990); // 1990 is an argument of this function, the value which fills the parameter

// function calcAge1(birthYear) {  //parameter - placeholder in fuction
//     // const age = 2037 - birthYear;
//     // return age;
//     return 2037 - birthYear; //shorter way to write what is above; 
// }

// //Function expression - function without a name, also called anonymous function; expressions produce values; they can,t be called before there are defined

// const calcAge2 = function(birthYear){
//     return 2020 - birthYear;
// }

// const age2 = calcAge2(1990);
// //console.log(age1);
// console.log(age2);

// //Arrow function -the difference between fuction declaration and expression is that the arrow functions do not get so call this key word
// //only with one parameter
// const calcAge3 = birthYear => 2020 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// //with more that one argument
// const yearsUntillRetirement = birthYear => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntillRetirement(1990));

// //with more that one parameter
// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntillRetirement(1990, `Ula`));

//Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//       const applePieces = cutFruitPieces(apples);
//       const orangePieces = cutFruitPieces(oranges);
//       const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice; // tą wartość przypisuje do funkcji, czyli jest to wartość funcji
// }

// const appleJuice = fruitProcessor(5, 3); // we have to save the value of the function in another variable
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0)); 


//with more that one parameter
// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const yearsUntillRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         return retirement; // return statement immediately exits the function
//         console.log(`${firstName} retires in ${retirement}`);
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1
//     }
//     //return retirement;
//     // return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntillRetirement(1990, `Ula`));
// console.log(yearsUntillRetirement(1935, `Magda`));

// const friends = ['Michal', 'Jula', 'Jacek']; //literal syntax
// console.log(friends);

// const years = new Array(1990, 1674, 1876, 190);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length)
// console.log(friends[friends.length - 1]) //taking the last element in array

// // changing/mutating an element
// friends[2] = 'Zosia';
// console.log(friends);

// const firstName = 'Ula';
// const Ula = [firstName, 'Nawrot', 2020-1990, 'student', friends];
// console.log(Ula);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const  birthYear = [1223, 1456, 1876, 1998];

// //calcAge(birthYear) // this way we can't do it because we need a number and not an array

// const age1 = calcAge([birthYear[0]]);
// const age2 = calcAge([birthYear[1]]);
// const age3 = calcAge([birthYear[2]]);
// console.log(age1, age2, age3);

// const ages = [calcAge([birthYear[0]]), calcAge([birthYear[1]]),  calcAge([birthYear[2]])];
// console.log(ages)

// Arrays operation methods

// const friends = ['Michal', 'Jula', 'Jacek']

// // push method adds element to the end of an array

// const newLength = friends.push('Jay'); //if we want a length of an array we can just create a const using function push
// console.log(friends)

// // unshit adds an element a the beginning of an array

// friends.unshift('Kasia');
// console.log(friends)

// //Removes elements
// friends.pop(); //remove the last element
// const poped = friends.pop();
// console.log(friends);
// console.log(poped);

// friends.shift(); //removes the frist element
// console.log(friends);

// //returns an index at which element is located
// console.log(friends.indexOf('Michal'));
// //returns true or false if the element is in the array
// console.log(friends.includes('Jula'))
// //we can use this method to write conditional
// if(friends.includes('Peter')) {
//     console.log(`You have a friend call Peter`)
// } else {
//     console.log(`You don't have a friend with that name`)
// }

//Objects
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// //dot notation
// console.log(jonas.lastName);
// //bracket notation - we can put any expression ['first' + nameKey]  that we would like ,
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// //adding property
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// //console.log(jonas);

// //Chalange
// //"Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`)

// Object Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
    // A method
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
    // calling a function, but outside of an object
    // console.log(jonas.calcAge(1990));
    // console.log(jonas['calcAge'](1990));

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);
  
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(jonas.getSummary());
