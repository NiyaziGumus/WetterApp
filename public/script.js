document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('suchfeld').value; 
    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            const tempRounded = Math.round(data.main.temp); 
            document.getElementById('tempValue').textContent = tempRounded;
            document.getElementById('stadt').textContent = `${data.name}`;
            document.getElementById('luftfeuchtigkeit').textContent = `${data.main.humidity}%`;
            document.getElementById('windgeschwindigkeit').textContent = `${data.wind.speed} km/h`;
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('wetterIcon').src = iconUrl;
            document.getElementById('wetterIcon').style.display = "block";
            document.getElementById('luftIcon').style.display = "block";
            document.getElementById('windIcon').style.display = "block";
            document.getElementById('degree').style.display = "block";
            document.querySelectorAll('.unterInfos').forEach(function(element) {
                element.style.display = 'flex';
            });
            

        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
        });
});
