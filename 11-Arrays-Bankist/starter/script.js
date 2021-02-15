'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Challenge 1
// let juliasDogs = [3, 5, 2, 12, 7];
// const KatesDogs = [4, 1, 15, 8, 3];

// const checkDogs = function (array1, array2) {
//  juliasDogs = array1.slice(1,3); 
//  console.log(juliasDogs);
//  const allDogs = juliasDogs.concat(array2)
 
//  allDogs.forEach(function (dog, i) {
//    dog >= 3 ? console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`) : console.log(`Dog number ${i + 1} is still a puppy`)
//  })
// }
// checkDogs(juliasDogs, KatesDogs)

//Chalenge 2
// const ages = [5, 2, 4, 1, 15, 8, 3];
// function calcAverageHumanAge (params) {
//   const humanAge = params.map(function(curr){
//     if (curr <= 2) return 2 * curr;
//     else return 16 + curr * 4;
//   }).filter(function(curr){
//     return curr >= 18
//   }).reduce(function(total,curr,i,arr){
//     return total + curr / arr.length
//   },0);
//   console.log(humanAge);

// }

// calcAverageHumanAge(ages)

//Challenge 3
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dogs => dogs.recommendedFood = Math.trunc(dogs.weight ** 0.75 * 28));
console.log(dogs);

const dogSara = dogs.find(dog => dog.owners.includes('Sarah'));

const howMuchItEats = dogs.map((dog) => {
    if (dog.curFood < 0.9 * dog.recommendedFood) {
    console.log(`${dog.owners[0]}'s dog eats too little food.`);
  } else if (dog.curFood > 1.1 * dog.recommendedFood){
    console.log(`${dog.owners[0]}'s dog eats too much food.`);
  } else {
    console.log(`${dog.owners[0]}'s dog eats enough food.`);
  }})
  


console.log(howMuchItEats);


