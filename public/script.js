// Seite ist geladen, fokussiere automatisch das Suchfeld
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('suchfeld').focus();
});

// Wetterdaten abrufen Funktion
function fetchWeather() {
    const city = document.getElementById('suchfeld').value;
    fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
        const tempRounded = Math.round(data.main.temp);
        document.getElementById('tempValue').textContent = tempRounded; // Gerundete Temperatur anzeigen
        document.getElementById('stadt').textContent = `${data.name}`; // Stadtnamen anzeigen
        document.getElementById('luftfeuchtigkeit').textContent = `${data.main.humidity}%`; // Luftfeuchtigkeit anzeigen
        document.getElementById('windgeschwindigkeit').textContent = `${data.wind.speed} km/h`; // Windgeschwindigkeit anzeigen

        let iconUrl;
        const iconCode = data.weather[0].icon;
        if (iconCode === "01d") {
            iconUrl = "/img/sun.svg"; // Benutzerdefiniertes Sonnenicon für den Tag
        } else if (iconCode === "01n") {
            iconUrl = "/img/moon.svg"; // Benutzerdefiniertes Mondicon für die Nacht
        } else {
            iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // Standardicon von OpenWeatherMap
        }

        document.getElementById('wetterIcon').src = iconUrl; // Wettericon anzeigen
        document.getElementById('wetterIcon').style.display = "block";
        document.getElementById('luftIcon').style.display = "block";
        document.getElementById('windIcon').style.display = "block";
        document.getElementById('degree').style.display = "block";
        document.querySelectorAll('.unterInfos').forEach(element => element.style.display = 'flex'); // Unterinformationen als flex anzeigen
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
    });
}

// EventListener für den Suchbutton und die Enter-Taste
document.getElementById('searchBtn').addEventListener('click', fetchWeather);
document.getElementById('suchfeld').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        fetchWeather();
    }
});
