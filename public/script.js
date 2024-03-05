document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('suchfeld').value; // Kullanıcıdan alınan şehir adı
    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatur').textContent = `Temperatur: ${data.main.temp} °C`;
            document.getElementById('stadt').textContent = `Stadt: ${data.name}`;
            document.getElementById('luftfeuchtigkeit').textContent = `Luftfeuchtigkeit: ${data.main.humidity}%`;
            document.getElementById('windgeschwindigkeit').textContent = `Windgeschwindigkeit: ${data.wind.speed} km/h`;
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
        });
});
