import styles from '../Alimentacao/Alimentacao.module.css';
import * as React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useState, useEffect } from 'react';

const Alimentacao = () => {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetchAlimentos();
  }, []);

  const fetchAlimentos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/alimentos/all/', {
        method: 'GET',
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setAlimentos(data);
      } else {
        console.error('Erro: A resposta da API não é um array:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar alimentos:', error);    
    }
  };

  return (
    <div>
      <Navbar />
      <TituloPagina titulo='Alimentação' />
    
      <div className={styles.conjuntoCards}>
        {Array.isArray(alimentos) && alimentos.map((alimento, index) => (
          <div key={index} className={styles.CardContatos}>
            <h3>{alimento.tipoAlimento}</h3>
            <p>Quantidade: {alimento.quantidade}</p>
            <p>Endereço: {alimento.enderecoAlimento}</p>
            <p>Telefone: {alimento.numTelefone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alimentacao;
