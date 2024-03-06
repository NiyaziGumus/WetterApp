document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('suchfeld').value; 
    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatur').textContent = `Temperatur: ${data.main.temp} °C`;
            document.getElementById('stadt').textContent = `Stadt: ${data.name}`;
            document.getElementById('luftfeuchtigkeit').textContent = `Luftfeuchtigkeit: ${data.main.humidity}%`;
            document.getElementById('windgeschwindigkeit').textContent = `Windgeschwindigkeit: ${data.wind.speed} km/h`;
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('wetterIcon').src = iconUrl;
            document.getElementById('wetterIcon').style.display = "block";
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
        });
});
