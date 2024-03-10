# Weather App

## Project Preview
Here is a preview of our Weather App:

![Weather App Preview](https://github.com/NiyaziGumus/WetterApp/blob/main/public/img/Screenshot.png?raw=true)

## About the Project

This Weather App allows users to fetch real-time weather information for any city. It was developed to demonstrate my full-stack web development skills, with a focus on integrating external APIs and utilizing Node.js for the backend service. The goal was to create an interactive and user-friendly application that dynamically displays weather data.

## Technologies

The project uses the following technologies:

- **HTML5**: For structuring the web application.
- **CSS3**: For styling and creating a responsive design.
- **JavaScript**: For dynamic interactions on the client side.
- **Node.js**: As the runtime environment for the backend service.
- **Express.js**: A web application framework for Node.js, used to handle API requests.
- **OpenWeatherMap API**: For fetching real-time weather data.

## Obtaining Your OpenWeatherMap API Key

To use this Weather App, you will need to obtain your own API key from OpenWeatherMap:

1. Visit [OpenWeatherMap's website](https://openweathermap.org/) and sign up for an account.
2. Once logged in, navigate to the 'API keys' tab and generate a new API key.
3. Copy your API key and place it in the application's configuration file or environment variable as appropriate.

## Configuring Your API Key in the Application

After obtaining your API key, you need to configure the application to use it. For this project, you can set the API key in an environment variable named `OPENWEATHER_API_KEY`:

- If you are running the application locally, you can set this environment variable in your operating system, or use a `.env` file at the root of the project with the following content:

    ```
    OPENWEATHER_API_KEY=your_api_key_here
    ```

- Make sure to replace `your_api_key_here` with your actual OpenWeatherMap API key.

## Features

- **City Search**: Users can search for a city to display current weather information.
- **Display of Weather Data**: Shows temperature, wind speed, humidity, and more based on the search.
- **Dynamic Weather Icons**: Icons visually representing the current weather are displayed based on the API data.
- **Responsive Design**: The application is fully responsive, providing an optimal user experience on both desktop and mobile devices.

## Usage

To run the project locally, follow these steps:

1. Clone the repository to your computer.
2. Run `npm install` to install the required packages.
3. Start the server with `node index.js`.
4. Open `http://localhost:3000` in your browser to use the application.

## License

This project is open-sourced under the MIT license, allowing for unrestricted use, modification, and distribution.
