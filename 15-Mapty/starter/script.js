'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class App {
    constructor() {

    }
    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition( this._loadMap,function () {alert('Could not get your position');}
            );
    }

    _loadMap(position) {

        console.log(position)
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(latitude, longitude);
        console.log(`https://www.google.pl/maps/@${latitude},${longitude},12z`);

        map = L.map('mapid').setView([latitude, longitude], 13);


        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'sk.eyJ1Ijoic2lvc3RyYXVyc3p1bGFua2EiLCJhIjoiY2tsemVubTlpM2pscjJwcW0ycXdzYjYyMyJ9.6WdnQPNfiC4g4lKChZfa5g'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map).bindPopup("You are here").openPopup();

        //Handling clincks on map
        map.on('click', function (mapE) {
            mapEvent = mapE;

            form.classList.remove('hidden');
            inputDistance.focus();

        })
    }

    _showForm() { }

    _toggleElevationField() { }

    _newWorkOut() { }
}

const app = new App();
app._getPosition();

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //Clear distance
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    //Display marker
    console.log(map);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',//class that we can style in CSS
            }))
        .setPopupContent('Workout')
        .openPopup();
});

inputType.addEventListener('change', function () {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})