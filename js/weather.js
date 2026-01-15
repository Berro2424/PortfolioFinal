const latitude = 42.3684;
const longitude = -83.3527;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;

        document.getElementById("status").textContent =
            "Current weather in Livonia, Michigan";

        document.getElementById("temperature").textContent =
            `${weather.temperature} °F`;

        document.getElementById("wind").textContent =
            `${weather.windspeed} mph`;

        document.getElementById("code").textContent =
            weather.weathercode;
    })
    .catch(() => {
        document.getElementById("status").textContent =
            "Unable to load weather data.";
    });
