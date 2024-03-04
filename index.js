import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch'; // fetch'i import edin

dotenv.config(); // dotenv'i bir kez çağırın

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("API'den veri alınırken bir hata oluştu.");
    }
});

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
});
