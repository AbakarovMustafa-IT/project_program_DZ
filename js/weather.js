let isSearch = false;
function getWeather(e) {
    let city = "Bishkek";
    if (e.target) {
        e.preventDefault()
        isSearch = true;
        city = e.target[0].value;
    }
    fetch(`https://api.weatherapi.com/v1/current.json?key=92de6aabc5d742d1af952526231706&q=${city}&aqi=no&lang=en`)
        .then(response => response.json())
        .then(data => {
            const cityName = data.location.name;
            const temperature = data.current.temp_c;
            const weatherCondition = data.current.condition.text;

            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weather-condition').textContent = weatherCondition;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
if (!isSearch) {
    getWeather({ target: false })
}