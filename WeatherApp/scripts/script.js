const apiKey = "e302aac8034d9a6df07494b6ba78a728";

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if(!city) {
        alert("Enter a city name!!!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(url);
    fetch(url)
        .then(response => {
            // console.log((JSON.stringify(response.json())));
            return response.json();
        })
        .then(data => {
            if(data.cod === "404") {
                document.getElementById("weatherBox").innerHTML = `<p>City not found!!!</p>`;
                return;
            }

            document.getElementById("weatherBox").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.main.temp}°C</h3>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Himidity: ${data.main.humidity}</p>
                <p>Wind: ${data.wind.speed}</p>
            `;
        })
        .catch(() => {
            alert("Error fetching weather data!!!");
        })
}