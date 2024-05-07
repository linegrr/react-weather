import React, { useState } from "react";
import axios from "axios";
import "./styles.css"

export default function Search() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setLoaded(true);
    setMessage({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2dda52dce059eb8a14e95aaa0db6ab7&units=metric`;
    axios.get(url).then(showTemperature);
  }

  if (loaded) {
    return (
      <div>
        <h1>Weather App</h1>
        <form>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="Search"  onClick={handleSearch} />
        </form>
       <div className="result"> <ul>
          <li>Temperature: {Math.round(message.Temperature)}ºC</li>
          <li>Description: {message.Description}</li>
          <li>Humidity: {message.Humidity}%</li>
          <li>Wind: {message.Wind}km/h</li>
          <li> <img src={message.Icon}></img></li>
        </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <h1>Weather App</h1>
        <form>
          <input type="search" className="Search-button" onChange={updateCity} />
          <input type="submit" value="Search" onClick={handleSearch} />
        </form>
      </div>
    );
  }
}