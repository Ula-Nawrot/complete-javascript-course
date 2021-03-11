'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data) {
//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//         </article>`;
//     //toFixed - zaokrąglanie
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// }
// const getCountryAndNeighbour = function (country) {
//     //AJAX call country 1
//     const request = new XMLHttpRequest(); //old school way 
//     //next we need url to which we will make the AJAX call
//     //first we need to pass in the type of request: GET
//     //second we need a string containing url to which AJAX call should be made
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     // next we need to send it to this url
//     request.send();
//     //we need to reqister a callback on the request object for the load event
//     //as soon as data arrives this callback function will be called
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText)//[]destructuring
//         console.log(data);
        
//         // Render country 1
//         renderCountry(data);

//         // Get neighbour country (2)
//         const [neighbour] = data.borders;

//         if (!neighbour) return;
//         // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//     })
// }
// //AJAX call are happening at the same time
// getCountryAndNeighbour('portugal');

//GET function
const request = fetch('https://restcountries.eu/rest/v2/name/Poland')
console.log(request); //-> Promise