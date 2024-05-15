import React, { useState, useEffect } from 'react';
import style from './../ApiClima/ApiClima.module.css'; // Certifique-se de ter o arquivo CSS adequado importado
import axios from 'axios'; // Você precisará instalar axios via npm ou yarn

function ApiClima() {
  const [city, setCity] = useState("Recife");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=447954334ef4e0c591d2ef05536ccc95&lang=pt_br`);
        setWeatherData(response.data);
      } catch (error) {
        setError("Não foi possível encontrar o clima de uma cidade com este nome");
      }

      setIsLoading(false);
    };

    fetchData();
  }, [city]);

  // eslint-disable-next-line no-unused-vars
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className={style.container}>
      {isLoading && (
        <div className={style.loader}>
          <i className={style.fas_fa_spinner}></i>
        </div>
      )}

      {error && (
        <div className={style.error_message}>
          <p>{error}</p>
        </div>
      )}

      {weatherData && (
        <div className={style.weather_data}>
          <div className={style.cidade}>
            <h2>
              <i className={style.fas_fa_location_dot}></i>
              <span className={style.city}>{weatherData.name}</span>
            </h2>
          </div>

          <div className={style.Clima}>
            <div className={style.details_humidity}>
              <p className={style.humidity}>
                <i className={style.fas_fa_droplet}></i>
                <span>{weatherData.main.humidity}%</span>
              </p>
              <p>Umidade</p>
            </div>

            <div>
              <p className={style.temperature}><span>{parseInt(weatherData.main.temp)}</span>&deg;C</p>
            </div>

            <div className={style.details_wind}>
              <p className={style.wind}>
                <i className={style.fas_fa_wind}></i>
                <span>{weatherData.wind.speed} km/h</span>
              </p>
              <p>Vento</p>
            </div>
          </div>
          <div className={style.description_container}>
            <p className={style.description}>{weatherData.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Condições do tempo" id="weather-icon" />
          </div>  
          </div>
      )}
    </div>
  );
}

export default ApiClima;
