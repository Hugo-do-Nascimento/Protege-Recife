import React from 'react';
import Styles from './AcompanharAlerta.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ApiAlerta from '../../components/ApiAlerta/ApiAlerta';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

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
    <TituloPagina titulo='Acompanhar Alerta' />      
    <Chatbot />
    <ApiAlerta/>
    <p className={Styles.text}>Em caso de mudança brusca do tempo, encontre um lugar seguro para se abrigar.</p>
    <button onClick={handleBuscarLocal} className={Styles.btn}>
          Buscar Local
          </button>
    </div>    
      
    
  )
}

export default Alerta;