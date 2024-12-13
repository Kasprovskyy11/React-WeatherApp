import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './components/header.tsx';

import './App.css';



function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "f889fe0bb61643141996f7780acbed17";

  const fetchWeather = async () => {
    if (!city) {
      setError("Insert city name");
      return;
    }

    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Couldn't find weather data for this city");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };
      

  return (
    <>
    <main>
      <Header/>
      <div className='inputs'>
        <TextField id="outlined-basic" className='input' label="City" variant="outlined" value={city} onChange={(e)=>setCity(e.target.value)} />
        <Button variant="contained" onClick={fetchWeather}>Submit</Button>
      </div>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather conditions: {weather.weather[0].description}</p>
        </div>
      )}
      </main>  
    </>
  );
}

export default App;
