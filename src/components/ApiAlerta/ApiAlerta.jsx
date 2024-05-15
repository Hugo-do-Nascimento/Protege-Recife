// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './ApiAlerta.module.css'
const API_KEY = '447954334ef4e0c591d2ef05536ccc95';
const CITY_NAME = 'Recife'; // Substitua 'NOME_DA_CIDADE' pelo nome da cidade desejada.

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
    imageUrl = 'https://cdn-icons-png.freepik.com/512/3937/3937493.png';
    descriptionClima = "Alerta Vermelho";// URL_PARA_tempestade
    descriptionClass = Styles['storm-text']; // Aplica a classe CSS para clima normal
} else if (weatherDescription.includes('chuva')) { 
    imageUrl = 'https://cdn-icons-png.freepik.com/512/3937/3937493.png';
    descriptionClima = "Alerta Laranja";// URL_PARA_CHUVA forte
    descriptionClass = Styles['rain-text']; // Aplica a classe CSS para clima normal

  } else if (weatherDescription.includes('chuvisco')) { 
    imageUrl = 'https://cdn-icons-png.flaticon.com/512/3248/3248333.png'; // URL_PARA_CHUVISCO
    descriptionClima = "Alerta Amarelo";
    descriptionClass = Styles['drizzle-text']; // Aplica a classe CSS para chuva fraca 
  } 
    else {
    imageUrl = 'https://cdn-icons-png.flaticon.com/512/178/178338.png'; // URL_PARA_CLIMA_NORMAL
    descriptionClima = "No momento não há impacto significativo na rotina da cidade, mas seguimos monitorando";
    descriptionClass = Styles['normal-text']; // Aplica a classe CSS para clima normal

  }

  return (
    <div className={Styles.Container}>
    <div className={Styles.Imagem} style={{ backgroundImage: `url(${imageUrl})`, width: '180px', height: '180px', backgroundSize: 'cover' }}></div>
    <div className={Styles.Alerta}>
    <p className={Styles.text_regiao}> Cidade em Estágio de: </p>
    <p className={descriptionClass}>{descriptionClima}</p>
    </div> 
      <div className={Styles.dcAlerta}>
              <p>Condição atual: {weatherDescription}</p>
      </div>
      
      </div>
  );
};

export default ApiAlerta;
