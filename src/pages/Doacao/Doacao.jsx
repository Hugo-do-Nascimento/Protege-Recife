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

const Doacao = () => {

  const [categoria, setCategoria] = useState();

  const handleCategoriaClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <div>
      <Navbar />
      <h1><span>Categorias</span></h1>
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
    {categoria === 'aliementacao' && <Alimentacao />}
    {categoria === 'calcados' && <Calcados />}
    {categoria === 'camaMesaBanho' && <CamaMesaBanho />}
    {categoria === 'materialEscolar' && <MaterialEscolar />}
    {categoria === 'vestuario' && <Vestuario />}
    {categoria === 'higieneLimpeza' && <HigieneLimpeza />}

  </div>
  );
}

export default Doacao;