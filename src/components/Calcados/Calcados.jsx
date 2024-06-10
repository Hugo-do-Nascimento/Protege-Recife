import React from 'react';
import styles from './../Calcados/Calcados.module.css';
import Navbar from '../Navbar/Navbar';
import TituloPagina from '../TituloPagina/TituloPagina';
import { useState, useEffect } from 'react';

const Calcados = () => {
  const [calcados, setCalcados] = useState([]);

  useEffect(() => {
    fetchCalcados();
  }, []);

  const fetchCalcados = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/calcados/all/', {
        method: 'GET',
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setCalcados(data);
      } else {
        console.error('Erro: A resposta da API não é um array:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar calcados:', error);    
    }
  }


  return (
    <div>
      <Navbar />
      <TituloPagina titulo='Calçados'/>

      <div className={styles.conjuntoCards}>
        {Array.isArray(calcados) && calcados.map((calcado, index) => (
          <div key={index} className={styles.CardContatos}>
            <h3>{calcado.tipoCalcados}</h3>
            <p>Quantidade: {calcado.quantidade}</p>
            <p>Endereço: {calcado.enderecoCalcado}</p>
            <p>Telefone: {calcado.numTelefone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calcados