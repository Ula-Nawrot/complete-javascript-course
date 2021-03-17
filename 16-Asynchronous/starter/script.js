'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
    const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>`;
    //toFixed - zaokrąglanie
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
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



// const getCountryData = function (country) {
//     // it returns Promise, it is pending promise
//     //fetch(`https://restcountries.eu/rest/v2/name/${country}`) 

//     //in the then method we pass a callback function that we want to execute as soon as the promise if acctualy fullfild (as soon as the result is avaible)
//     //a response of AJAX call is a parameter of callback function
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {
//         console.log(response);
//         //in order to be able to read the data in response (from the body) we need to call json method (this method is avaible on all responses of the fetch method) on the response
//         return response.json() //->this gives another promise
//     }).then(function (data) { console.log(data); })
// }

// getCountryData('poland')

//more clear code
// const getCountryData = function (country) {
//     //Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).
//     then(
//         response => response.json())
//         .then(data => {
//             renderCountry(data[0])
//             const neighbour = data[0].borders[0];

//             if (!neighbour) return;

//             //Country 2
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//         }).then(response => response.json())
//         .then(data => renderCountry(data))
//         .catch(err=>alert(err));
//         //catch method will catch any errors that occure in any place in this whole promise chain
//         //errors propagate down the chain until they are caught
// }

// btn.addEventListener('click',function(){
//     getCountryData('Poland')
// })

//getCountryData('poland');

