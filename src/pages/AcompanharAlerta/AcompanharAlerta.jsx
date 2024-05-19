import React from 'react';
import Styles from './AcompanharAlerta.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ApiClima from '../../components/ApiClima/ApiClima';
import ApiAlerta from '../../components/ApiAlerta/ApiAlerta';
// Imagem dos botões

// Funções para direcionamento de paginas
import Chatbot from '../../components/Chatbot/Chatbot';
  import { useNavigate } from 'react-router-dom';

function Alerta() {

  const navigate = useNavigate();
  
    const handleBuscarLocal = () => {
      navigate('/buscar-locais');
    }


  return (
    <div>
    <Navbar />      
    <ApiClima />
    <Chatbot />
    <ApiAlerta/>
    <p>Encontre um lugar para se abrigar</p>
    <button onClick={handleBuscarLocal} className={Styles.btn}>
          Buscar Local
          </button>
    </div>    
      
    
  )
}

export default Alerta;