const axios = require('axios');

const apiKey = 'e90abc609f8d78b835f22fb79b19c089';

const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];

const getWeather = async (city) => {
  try {
    const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = response.data;

    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log('----------------------');
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error.message);
    console.log('----------------------');
  }
};

const fetchWeatherForAllCities = async () => {
  for (const city of cities) {
    await getWeather(city);
  }
};

fetchWeatherForAllCities();
