import React from 'react';
import styles from './../Vestuario/Vestuario.module.css';
import Navbar from '../Navbar/Navbar';
import TituloPagina from '../TituloPagina/TituloPagina';

const Vestuario = () => {

  const dadosDoacao = [
    {
      "id": 1,
      "tipo": "Camisas",
      "nome": "Abrigo 1",
      "endereco": "Rua Prof. José Amarino dos Reis, 392",
      "telefone": "(81) 98888-7777",
      "email": "exemplo@gmail.com",
    },
    {
      "id": 2,
      "tipo": "Vestidos",
      "nome": "Abrigo 2",
      "endereco": "Rua Prof. José Amarino dos Reis, 392",
      "telefone": "(81) 98888-7777",
      "email": "exemplo@gmail.com",
    },
  ];

  return (
    <div>
      <Navbar />
      <TituloPagina titulo='Vestuário' />
    
      <div className={styles.conjuntoCards}>
        {dadosDoacao.map((doacao, index) => (
            <div key={index} className={styles.CardContatos}>
              <h3>{doacao.tipo}</h3>
              <p>{doacao.nome}</p>
              <p>{doacao.endereco}</p>
              <p>{doacao.telefone}</p>
              <p>{doacao.email}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Vestuario;