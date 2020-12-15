// Lecture: function
//  function describeCountry(country, population, capitalCity) {
//      return `${country} has ${population} milion people and its capital city is ${capitalCity}.`; 
//  }

//  const country1 = describeCountry('Poland', 36, 'Warsaw');
//  const country2 = describeCountry('Belgium', 11.5, 'Brussels');
//  const country3 = describeCountry('Germany', 83, 'Berlin')
//  console.log(country1, country2, country3)

//Lecture: Function Declarations vs. Expressions
  //Function declaration
//  function precentageOfWorld1(population) {
//      return population / 7900 * 100;
//  }

//  const country1 = precentageOfWorld1(36);
//  const country2 = precentageOfWorld1(11.5);
//  const country3 = precentageOfWorld1(83);
//  console.log(country1, country2, country3)

//  //Function expression
//  const precentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
//  }

//  const country4 = precentageOfWorld2(36);
//  const country5 = precentageOfWorld2(11.5);
//  const country6 = precentageOfWorld2(83);

//  console.log(country4, country5, country6);

//  //Arrow function
//  const precentageOfWorld3 = (population) => population / 7900 * 100;

//  const country7 = precentageOfWorld3(100);
//  console.log(country7);

//  //Function Calling Other Function

//  function describePopulation(country, population){
//      const precentage = precentageOfWorld1(population);
//      return `${country} has ${population} milion people, which is ${precentage}% of the world.`
//  }

//  const country8 = describePopulation('Poland', 39);
//  console.log(country8);
 