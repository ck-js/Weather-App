const name = document.querySelector('#name');
const tempC = document.querySelector('#temp-c');
const overview = document.querySelector('#overview');
const overviewImage = document.querySelector('#overview-image');
const highLow = document.querySelector('#high-low');

const section2Container = document.querySelector('#section-2-container');


function fetchNewLocation(location) {
// alert(location)

fetch(`https://api.weatherapi.com/v1/forecast.json?key=06b893ef0f8344fc8d001651241706&q=${location}&days=3`, {
  mode: 'cors'
 })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    // section 1
    name.innerHTML = response.location.name;
    tempC.innerHTML = response.current.temp_c + '°C';
    overview.innerHTML = response.current.condition.text;
    overviewImage.src = response.current.condition.icon;
    overviewImage.alt = response.current.condition.text;
    highLow.innerHTML = `H : ${response.forecast.forecastday[0].day.maxtemp_c}°  L : ${response.forecast.forecastday[0].day.mintemp_c}°`;

// section 2
createCardItem(response)




  })
  .catch(function(error) {
    console.log(error);
    name.innerHTML = 'Location not found';
    tempC.innerHTML = '°';
  });
}


function createCardItem(object) {
const hourly = object.forecast.forecastday[0].hour;
const currentTime = object.location.localtime;

    for (let i = 0; i < hourly.length; i++) {
        const hourlyTime = hourly[i].time;
        const date = new Date(hourlyTime)
        const formattedHourlyTime = (date.getHours() < 10 ? '0' : + '') + date.getHours();
        const hourlyCondition = hourly[i].condition;
        const hourlyTemp = hourly[i].temp_c;
    

        if (hourlyTime > currentTime) {
        const hourlyDiv = document.createElement('div');
        hourlyDiv.classList.add('hourly-card');

    const p = document.createElement('h6');
    p.textContent = formattedHourlyTime;
    
const conditionIcon = document.createElement('img');
conditionIcon.src = hourlyCondition.icon;
conditionIcon.alt = hourlyCondition.text;

    const p2 = document.createElement('p');
    p2.textContent = hourlyTemp + '°'
    
    hourlyDiv.appendChild(p)
hourlyDiv.appendChild(conditionIcon)
    hourlyDiv.appendChild(p2)
    
    section2Container.appendChild(hourlyDiv);
        }

    }
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
  searchInput.value = '';
}
});



fetchNewLocation('bangkok')