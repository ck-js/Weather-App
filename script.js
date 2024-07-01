
const name = document.querySelector('#name');
const tempC = document.querySelector('#temp-c');


function fetchNewLocation(location) {

// alert(location)

fetch(`https://api.weatherapi.com/v1/current.json?key=06b893ef0f8344fc8d001651241706&q=${location}`, {
  mode: 'cors'
 })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    name.innerHTML = response.location.name;
    tempC.innerHTML = response.current.temp_c + '°C';

  })
  .catch(function(error) {
    console.log(error);
    name.innerHTML = 'Location not found';
    tempC.innerHTML = '°';
  });


}

const searchInput = document.getElementById('search-input');
const button = document.querySelector('button')
button.addEventListener('click', event => {
event.preventDefault();
fetchNewLocation(searchInput.value);
searchInput.value = '';
});

searchInput.addEventListener('keydown', event => {
if (event.key === 'Enter') {
  event.preventDefault();
  fetchNewLocation(searchInput.value);
}
});



fetchNewLocation('london')