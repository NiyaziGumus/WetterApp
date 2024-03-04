import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch'; // node-fetch Modul importieren

dotenv.config(); // Umgebungsvariablen aus der .env-Datei laden

const app = express(); // Eine neue Express-Anwendung erstellen
const port = process.env.PORT || 3000; // Port definieren, Standardwert ist 3000

// Middleware, um JSON-Anfragen zu verarbeiten
app.use(express.json());

// Route definieren, um Wetterdaten für eine spezifische Stadt zu erhalten
app.get('/weather', async (req, res) => {
    const city = req.query.city; // Stadt aus der Query-Parameter lesen
    const apiKey = process.env.OPENWEATHER_API_KEY; // API-Schlüssel aus der Umgebungsvariablen lesen
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url); // API-Anfrage senden
        const data = await response.json(); // Antwort als JSON erhalten
        res.send(data); // Daten als Antwort senden
    } catch (error) {
        console.error(error); // Fehler in der Konsole anzeigen
        res.status(500).send("Beim Abrufen der Daten von der API ist ein Fehler aufgetreten."); // Fehlermeldung senden
    }
});

// Server starten und auf dem definierten Port lauschen
app.listen(port, () => {
    console.log(`Die Anwendung läuft auf Port ${port}.`); // Konsolenausgabe, wenn der Server erfolgreich gestartet wurde
});
