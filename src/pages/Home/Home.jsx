import React from 'react';
import style from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import ApiClima from '../../components/ApiClima/ApiClima';

// Imagem dos botões
import casa from '../../assets/iconeCasa.svg';
import telefone from '../../assets/iconeTelefone.svg';
import alerta from '../../assets/iconeAlerta.svg';
import doacao from '../../assets/iconeDoacao.svg';


// Funções para direcionamento de paginas
import { useNavigate } from 'react-router-dom';
import Chatbot from '../../components/Chatbot/Chatbot';

const Home = () => {
  const navigate = useNavigate();

  const handleBuscarLocais = () => {
    navigate('/buscar-locais');
  }

  const handleDoacao = () => {
    navigate('/doacoes');
  }

  const handleContatos = () => {
    navigate('/contatos');
  }

  const handleAcompanhar = () => {
    navigate('/acompanhar-alerta');
  }



  return (
    <div>
    <Navbar />
    <div className={style.container}>
      <ApiClima />
      <div className={style.conjunto_botoes}>
        <button onClick={handleBuscarLocais} className={style.botao_azul}>
          <img className={style.img} src={casa} alt='buscar local'/>
          <p>Buscar Local</p>
        </button>

        <button onClick={handleDoacao} className={style.botao_azul}>
          <img src={doacao} alt='doação'/>
          <p>Doações</p>
        </button>

        <button onClick={handleContatos} className={style.botao_azul}>
          <img src={telefone} alt='telefone'/>
          <p>Contatos de Emergência</p>
        </button>

        <button onClick={handleAcompanhar} className={style.botao_azul}>
          <img src={alerta} alt='alerta'/>
          <p>Acompanhar<br></br>Alerta</p>
        </button>
      </div>
    </div>
    <Chatbot />
    </div>
  )
}

export default Home;