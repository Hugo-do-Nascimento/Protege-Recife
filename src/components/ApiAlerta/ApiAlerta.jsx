// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Normal from '../../assets/thumbs-up.svg';
import AlertaMax from '../../assets/siren.svg';
import AlertMed from '../../assets/triangle-alert.svg';
import Styles from './ApiAlerta.module.css'

const API_KEY = '447954334ef4e0c591d2ef05536ccc95';
const CITY_NAME = 'Recife';

const ApiAlerta = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}&lang=pt_br`);
        setWeather(response.data);
      } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Carregando...</div>;
  }

  const weatherDescription = weather.weather[0].description;
    let imageUrl;
    let descriptionClima;
    let descriptionClass;

    if (weatherDescription.includes('tempestade')) { 
      imageUrl = [AlertaMax];
      descriptionClima = "Alerta de chuvas intensas! Risco de enchentes e deslizamentos. Evite áreas de risco e busque abrigo seguro imediatamente.";// URL_PARA_tempestade
      descriptionClass = Styles['storm-text'];
    } else if (weatherDescription.includes('chuva')) { 
      imageUrl = [AlertMed];
      descriptionClima = "Possibilidade de chuvas moderadas. Mantenha-se atento às atualizações e tome precauções";// URL_PARA_CHUVA forte
      descriptionClass = Styles['rain-text'];
    } else if (weatherDescription.includes('chuvisco')) { 
      imageUrl = [AlertMed]; // URL_PARA_CHUVISCO
      descriptionClima = "Possibilidade de chuvas moderadas. Mantenha-se atento às atualizações e tome precauções";
      descriptionClass = Styles['drizzle-text']; 
    } else {
      imageUrl = [Normal]; // URL_PARA_CLIMA_NORMAL
      descriptionClima = "Não há risco de chuvas. Fique tranquilo e mantenha-se informado sobre as condições climáticas locais.";
      descriptionClass = Styles['normal-text'];
    }

  return (
    <div className={Styles.Container}>
      <div className={Styles.Alerta}>
        <div className={Styles.Imagem} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
        <div className={Styles.dcAlerta}>
          <p>Condição Atual do Tempo: {weatherDescription}</p>
        </div>
        <p className={descriptionClass}>{descriptionClima}</p>
      </div>  
    </div> 
  );
};

export default ApiAlerta;
