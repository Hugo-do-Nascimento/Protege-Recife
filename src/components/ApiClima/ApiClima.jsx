import React, { useState, useEffect } from 'react';
import style from './../ApiClima/ApiClima.module.css';
import axios from 'axios';

function ApiClima() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let location = await getCurrentLocation();
        if (location) {
          const cityName = await getCityName(location.latitude, location.longitude);
          setCity(cityName);

          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=447954334ef4e0c591d2ef05536ccc95&lang=pt_br`);
          setWeatherData(response.data);
        }
      } catch (error) {
        setError('Não foi possível encontrar o clima para sua localização.');
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocalização não é suportada pelo seu navegador.'));
      }
    });
  };

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`);
      return response.data.address.city || response.data.address.town || response.data.address.village || response.data.address.county;
    } catch (error) {
      throw new Error('Não foi possível obter o nome da cidade.');
    }
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
              <span className={style.city}>{city}</span>
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
