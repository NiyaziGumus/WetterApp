function fetchWeather() {
    const city = document.getElementById('suchfeld').value; 
    fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
        const tempRounded = Math.round(data.main.temp); 
        document.getElementById('tempValue').textContent = tempRounded;
        document.getElementById('stadt').textContent = `${data.name}`;
        document.getElementById('luftfeuchtigkeit').textContent = `${data.main.humidity}%`;
        document.getElementById('windgeschwindigkeit').textContent = `${data.wind.speed} km/h`;

        let iconUrl;
        const iconCode = data.weather[0].icon;
        if (iconCode === "01d") {
            iconUrl = "/img/sun.svg"; // Gündüz için özel güneş ikonu
        } else if (iconCode === "01n") {
            iconUrl = "/img/moon.svg"; // Gece için özel ay ikonu
        } else {
            iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Diğer durumlar için standart OpenWeatherMap ikonu
        }

        document.getElementById('wetterIcon').src = iconUrl;
        document.getElementById('wetterIcon').style.display = "block";
        document.getElementById('luftIcon').style.display = "block";
        document.getElementById('windIcon').style.display = "block";
        document.getElementById('degree').style.display = "block";
        document.querySelectorAll('.unterInfos').forEach(element => element.style.display = 'flex');
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
    });
}

document.getElementById('searchBtn').addEventListener('click', fetchWeather);

document.getElementById('suchfeld').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        fetchWeather();
    }
});
