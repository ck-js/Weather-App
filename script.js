const name = document.querySelector('#name');
const tempC = document.querySelector('#temp-c');
const overview = document.querySelector('#overview');
const overviewImage = document.querySelector('#overview-image');
const highLow = document.querySelector('#high-low');

const section2Container = document.querySelector('#section-2-container');
const section3Container = document.querySelector('#section-3-container');
const section4Container = document.querySelector('#section-4-container');


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
createSection2Cards(response)
createSection3Cards(response)
createSection4Cards(response)


  })
  .catch(function(error) {
    console.log(error);
    name.innerHTML = 'Location not found';
    tempC.innerHTML = '°';
  });
}
function removeChildItems(container) {
while (container.firstChild) {
    container.removeChild(container.firstChild);
}
}

function createSection2Cards(object) {
removeChildItems(section2Container);

const hourly = object.forecast.forecastday[0].hour;
const currentTime =new Date(object.location.localtime);

    for (let i = 0; i < hourly.length; i++) {
        const hourlyTime = hourly[i].time;
        
        const date = new Date(hourlyTime)
        const formattedHourlyTime = (date.getHours() < 10 ? '0' : + '') + date.getHours();
        const hourlyCondition = hourly[i].condition;
        const chanceOfRain = hourly[i].chance_of_rain;
        const hourlyTemp = hourly[i].temp_c;
    

        if (date > currentTime) {
        const hourlyDiv = document.createElement('div');
        hourlyDiv.classList.add('hourly-card');

    const p = document.createElement('h6');
    p.textContent = formattedHourlyTime;
    hourlyDiv.appendChild(p)    

const conditionIcon = document.createElement('img');
conditionIcon.src = hourlyCondition.icon;
conditionIcon.alt = hourlyCondition.text;
hourlyDiv.appendChild(conditionIcon)

if (chanceOfRain > 0) {
const p3 = document.createElement('p')
p3.textContent = chanceOfRain + '%'
hourlyDiv.appendChild(p3)
}
    const p2 = document.createElement('p');
    p2.textContent = hourlyTemp + '°'
        hourlyDiv.appendChild(p2)
    
    section2Container.appendChild(hourlyDiv);
        }

    }
}
function createSection3Cards(object) {
removeChildItems(section3Container);

const dailyForecast = object.forecast.forecastday;
for (let i = 0; i < dailyForecast.length; i++) {
    const dailyForecastObject = dailyForecast[i];

 const dailyForecastDate = new Date(dailyForecast[i].date);   
        const formattedDay = dailyForecastDate.toLocaleDateString('en-US', { weekday: 'short' });

 const cardElement = document.createElement('div');
    cardElement.classList.add('daily-forecast-cards');

const h6 = document.createElement('h6');
h6.textContent = formattedDay;
cardElement.appendChild(h6)

const dailyConditionWrapper = document.createElement('div');
dailyConditionWrapper.classList.add('daily-condition-wrappers');

const dailyConditionImage = document.createElement('img');
dailyConditionImage.src = dailyForecastObject.day.condition.icon;
dailyConditionImage.alt = dailyForecastObject.day.condition.text;

const dailyChanceOfRain = document.createElement('p');
dailyChanceOfRain.textContent = dailyForecastObject.day.daily_chance_of_rain + '%';

dailyConditionWrapper.appendChild(dailyConditionImage);
dailyConditionWrapper.appendChild(dailyChanceOfRain);
cardElement.appendChild(dailyConditionWrapper);

const lowHighWrapper = document.createElement('div');
lowHighWrapper.classList.add('low-high-wrappers');

lowDaily = document.createElement('p');
lowDaily.textContent = dailyForecastObject.day.mintemp_c + '°';
const dailyTempColor = document.createElement('hr');

if (dailyForecastObject.day.avgtemp_c >= 35) {
  dailyTempColor.style.borderColor = 'red';  
} 
else if(dailyForecastObject.day.avgtemp_c >= 30) {
    dailyTempColor.style.borderColor = 'orange';  
  } 
  else if(dailyForecastObject.day.avgtemp_c >= 25) {
    dailyTempColor.style.borderColor = 'yellow';  
  } 
  else if(dailyForecastObject.day.avgtemp_c >= 20) {
    dailyTempColor.style.borderColor = 'blue';  
  }   
  else if(dailyForecastObject.day.avgtemp_c >= 10) {
    dailyTempColor.style.borderColor = 'lightBlue';  
  }   
  else if(dailyForecastObject.day.avgtemp_c >= 10) {
    dailyTempColor.style.borderColor = 'gray';  
  }   
  
const highDaily = document.createElement('p');
highDaily.textContent = dailyForecastObject.day.maxtemp_c + '°';

lowHighWrapper.appendChild(lowDaily);
lowHighWrapper.appendChild(dailyTempColor);
lowHighWrapper.appendChild(highDaily);
cardElement.appendChild(lowHighWrapper);

section3Container.appendChild(cardElement);
}
}
function createSection4Cards(object) {
    removeChildItems(section4Container)

const currentObject = object.current;

const feelsLike = currentObject.feelslike_c;
const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.classList.add('section-4-cards');

const feelsLikeHeader = document.createElement('h6');
feelsLikeHeader.textContent = 'FEELS LIKE';
const feelsLikeValue = document.createElement('p');
feelsLikeValue.classList.add('section-4-values');
feelsLikeValue.textContent = feelsLike + '°';

const feelsLikeDescription = document.createElement('p');
if (currentObject.humidity > 60) {
feelsLikeDescription.textContent = 'Humidity is making it feel hotter';
} else {
feelsLikeDescription.textContent = '';
}
feelsLikeDiv.appendChild(feelsLikeHeader);
feelsLikeDiv.appendChild(feelsLikeValue);
feelsLikeDiv.appendChild(feelsLikeDescription);


const precepitation = currentObject.precip_mm;

const precipitationDiv = document.createElement('div');
precipitationDiv.classList.add('section-4-cards');

const precipitationHeader = document.createElement('h6');
precipitationHeader.textContent = 'PRECIPITATION';

const precipitationValue = document.createElement('p');
precipitationValue.classList.add('section-4-values');
precipitationValue.textContent = `${precepitation} mm`;
const precipitationValue2 = document.createElement('span');
precipitationValue2.textContent = ' in the last 24h';
precipitationValue.appendChild(precipitationValue2);

const precipitationDescription = document.createElement('p');


precipitationDiv.appendChild(precipitationHeader);
precipitationDiv.appendChild(precipitationValue);
precipitationDiv.appendChild(precipitationDescription);

section4Container.appendChild(feelsLikeDiv);
section4Container.appendChild(precipitationDiv);


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