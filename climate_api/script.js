const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

 


async function checkWeather(city) 
{
   const api="0efca63b3cc07e22d92f3a128224bb0f"
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
   const weather_data = await fetch(`${url}`).then(response => response.json());
   temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
}

searchBtn.addEventListener('click' , ()=>{
   checkWeather(inputBox.value)
})


// `https://api.openweathermap.org/data/2.5/weather?q=${mumbai}&appid=${0efca63b3cc07e22d92f3a128224bb0f}`