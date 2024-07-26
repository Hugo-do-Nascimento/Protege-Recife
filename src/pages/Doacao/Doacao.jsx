import React, { useEffect, useState } from 'react';
import styles from './../Doacao/Doacao.module.css';
import Navbar from '../../components/Navbar/Navbar';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import axios from 'axios';

const Doacao = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoacoes = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api.baserow.io/api/database/rows/table/318176/?user_field_names=true",
          headers: {
            Authorization: "Token T55hU00HK4IovT3n302mC6qCHaLmjDoT",
          },
        });

        setDoacoes(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar Doações ", error);
        setIsLoading(false);
      }
    }

    fetchDoacoes();
  }, [])

  return (
    <div>
      <Navbar />
      <TituloPagina titulo='Mural de Doações' />
      
      <div className={styles.conjuntoCards}>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          Array.isArray(doacoes) && doacoes.length > 0 ? (
            doacoes.map((doacao, index) => (
              <div key={index} className={styles.CardContatos}>
                <h3>{doacao.tipoAlimento}</h3>
                <p>{doacao.NomeLocal}</p>
                <p>Tipo: {doacao.Nome}</p>
                <p>Quantidade: {doacao.Quantidade}</p>
                <p>Endereço: {doacao.Endereco}</p>
                <p>Telefone: {doacao.Telefone}</p>            
              </div>
            ))
          ) : (
            <p>Nenhum item encontrado.</p>
          )
        )}
        
      </div>

  </div>
  );
}

export default Doacao;