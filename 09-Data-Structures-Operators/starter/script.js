'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Coding challange 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: { //chances for success
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//Coding challenge 2
// //Task 1
// const scores = Object.entries(game.scored);
// console.log(scores);

// for (const [numer, surname] of scores) {
//   console.log(Number(numer) + 1, surname);
// }

//Task 2

 

// //Task 1 - Create one player array for each team
// //first method
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// //second method
// const [players1, players2] = game.players;

// console.log(players1, players2);

// //Task 2 -  create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players 
// //first method
// //const gk = players1[0];
// //const fieldPlayers = players1.slice(1,players1.length);
// //second method
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// //Task 3 - create an array 'allPlayers' containing all players of both teams
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //Task 4 - create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' 
// const players1Final = [...players1, 'Thaigo', 'Coutinho', 'Persic'];
// console.log(players1Final);

// //Task 5 - Based on the game.odds object, create one variable for each odd (called'team1', 'draw' and 'team2') 
//  const {team1, x:draw, team2} = game.odds; // we change the name of x -> x:draw
//  console.log(team1, draw, team2);

//  //Task 6 - Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) 
// const printGoals = function (...players){
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Thiago', 'Coutinho', 'Perisic')
// printGoals(...game.scored);

// //Task 7 - The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. 
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//Challenge 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Task 1

//const events = ([...gameEvents.values()]); //converting a map into an array only with values of the map
//const event = new Set(events); // converting an array into a set
// const events = new Set([...gameEvents.values()]);
// console.log(events);

// //Task 2
// gameEvents.delete(64); //removing an element using a key
// console.log(gameEvents);

// //Task 3
// console.log(`An event happened, on average, every ${90/gameEvents.size} minut`);

// //Task 4

// for(const [key, value] of gameEvents){
//   if(key <= 45)console.log(`[FIRST HALF] At ${key} minut ${value} happened`);
//   else console.log(`[Second HALF] At ${key} minut ${value} happened`);
// }

//Challenge 4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

//pobrać dane z text area
//podzielić to na osobne stringi używając split() przez znak \n
//usunąć spacje z przodu i z tył
//wszystko zamienic na lower case
// włożyć do tabeli i podzielić string przez znak _
//drugi element tabeli wziąć i zmiększyc piersza literę
//połączyć przy użyciu join

// const changeCamelCase = function(string) {
//   const text = string.split('/n');
//   console.log(text);
//   for(const word of text) {
//     const [first, second] = word.toLowerCase().trim().split('_');
//     const second2 = second.replace(second[0], second[0].toUpperCase());
//     const final = first.concat(second2);
//     console.log(final);
//   }
// }

// changeCamelCase('underscore_case /nfirst_name /nSome_Variable /n calculate_AGE/ndelayed_departure ');

//Practice strings

// rozdzielenie stringu - 
// const flight = flights.split('+');
// // rozdzielenie na jeszcze mniejsze stringi 
// for (const i nfo of flight) {
//   const infoFlight = info.split(';');
//   const [arival, from, to, time] = infoFlight;
//   const fromDestination = from.toUpperCase().slice(0,3);
//   const toDestination = to.toUpperCase().slice(0,3);
//   const timeArival = time.replace(':','h');
//   const endString = ` from ${fromDestination} to ${toDestination} (${timeArival})`
//   console.log();
// }
