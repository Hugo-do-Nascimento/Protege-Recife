import styles from '../Alimentacao/Alimentacao.module.css';
import * as React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useState, useEffect } from 'react';

const Alimentacao = () => {
  const [alimentos, setAlimentos] = useState([]);

  const localAlimentos = [
    {
      "id": 1,
      "tipoAlimento": "Arroz",
      "quantidade": 50,
      "enderecoAlimento": "Rua dos Alimentos, 123",
      "numTelefone": "(11) 1234-5678"
    },
    {
      "id": 2,
      "tipoAlimento": "Feijão",
      "quantidade": 30,
      "enderecoAlimento": "Avenida das Comidas, 456",
      "numTelefone": "(11) 8765-4321"
    },
    {
      "id": 3,
      "tipoAlimento": "Macarrão",
      "quantidade": 40,
      "enderecoAlimento": "Rua das Massas, 789",
      "numTelefone": "(11) 1122-3344"
    },
    {
      "id": 4,
      "tipoAlimento": "Leite",
      "quantidade": 20,
      "enderecoAlimento": "Avenida do Leite, 101",
      "numTelefone": "(11) 2233-4455"
    },
    {
      "id": 5,
      "tipoAlimento": "Açúcar",
      "quantidade": 25,
      "enderecoAlimento": "Rua do Açúcar, 202",
      "numTelefone": "(11) 3344-5566"
    }
  ];

  useEffect(() => {
    fetchAlimentos();
  }, []);

  const fetchAlimentos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/alimentos/all/', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar alimentos');
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setAlimentos(data);
      } else {
        console.error('Erro: A resposta da API não é um array:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar alimentos:', error);
      setAlimentos(localAlimentos); // Carregar dados do JSON local em caso de erro
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
