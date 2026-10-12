// Function to fetch weather using async/await
async function getWeather() {
    var resultDiv = document.getElementById("weatherResult");
    var citySelect = document.getElementById("citySelect");

    var coords = citySelect.value.split(",");
    var lat = coords[0];
    var lon = coords[1];
    var cityName = citySelect.options[citySelect.selectedIndex].text;

    var apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true";

    resultDiv.innerHTML = "<p><i>Fetching live weather data...</i></p>";

    try {
        var response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP Error! Status: " + response.status);
        }

        var data = await response.json();

        var temp = data.current_weather.temperature;
        var wind = data.current_weather.windspeed;
        var windDir = data.current_weather.winddirection;
        var code = data.current_weather.weathercode;

        // show the weather info
        resultDiv.innerHTML = 
            "<h3>" + cityName + "</h3>" +
            "<p><b>Temperature:</b> " + temp + " °C</p>" +
            "<p><b>Wind Speed:</b> " + wind + " km/h</p>" +
            "<p><b>Wind Direction:</b> " + windDir + "°</p>" +
            "<p><b>Weather Code:</b> " + code + "</p>";

    } catch (error) {
        console.error("Fetch Error:", error);
        resultDiv.innerHTML = '<p style="color:red;">Failed to retrieve weather data.</p>';
    }
}
