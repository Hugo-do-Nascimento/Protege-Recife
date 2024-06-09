import React, { useState } from 'react';
import style from './../Doacao/Doacao.module.css';

//imagens dos botões
import iconeAli from '../../assets/iconeAlimentacao.svg';
import iconeCal from '../../assets/iconeCalcados.svg';
import iconeCama from '../../assets/iconeCama.svg';
import iconeHigiene from '../../assets/iconeHigiene.svg';
import iconeMaterial from '../../assets/iconeMaterial.svg';
import iconeVestuario from '../../assets/iconeVestuario.svg';

import Alimentacao from '../../components/Alimentacao/Alimentacao';
import Calcados from '../../components/Calcados/Calcados';
import CamaMesaBanho from '../../components/CamaMesaBanho/CamaMesaBanho';
import HigieneLimpeza from '../../components/HigieneLimpeza/HigieneLimpeza';
import MaterialEscolar from '../../components/MaterialEscolar/MaterialEscolar';
import Vestuario from '../../components/Vestuario//Vestuario';
import Navbar from '../../components/Navbar/Navbar';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useNavigate } from 'react-router-dom';

const Doacao = () => {
  const navigate = useNavigate();

  const handleCategoriaClick = (categoria) => {
    switch (categoria) {
      case 'alimentacao':
        navigate('/alimentacao');
        break;
      case 'calcados':
        navigate('/calcados');
        break;
      case 'camaMesaBanho':
        navigate('/cama-mesa-banho');
        break;
      case 'higieneLimpeza':
        navigate('/higiene-limpeza');
        break;
      case 'materialEscolar':
        navigate('/material-escolar');
        break;
      case 'vestuario':
        navigate('/vestuario');
        break;
      default:
        break;            
    }
  }

  return (
    <div>
      <Navbar />
      <TituloPagina titulo='Doações' />
      <div className={style.conjunto_botoes}>
        <button onClick={() => handleCategoriaClick('alimentacao')} className={style.botao_azul}>
          <img src={iconeAli} alt=''/>
          <p>Alimentação</p>
        </button>
        <button onClick={() => handleCategoriaClick('calcados')} className={style.botao_azul}>
          <img src={iconeCal} alt=''/>
          <p>Calçados</p>
        </button>
        <button onClick={() => handleCategoriaClick('camaMesaBanho')} className={style.botao_azul}>
          <img src={iconeCama} alt=''/>
          <p>Cama mesa e banho</p>
        </button>
        <button onClick={() => handleCategoriaClick('higieneLimpeza')} className={style.botao_azul}>
          <img src={iconeHigiene} alt=''/>
          <p>Higiene e Limpeza</p>
        </button>
        <button onClick={() => handleCategoriaClick('materialEscolar')} className={style.botao_azul}>
          <img src={iconeMaterial} alt=''/>
          <p>Material Escolar</p>
        </button>
        <button onClick={() => handleCategoriaClick('vestuario')} className={style.botao_azul}>
          <img src={iconeVestuario} alt=''/>
          <p>Vestuário</p>
        </button>
    </div>
  </div>
  );
}

export default Doacao;