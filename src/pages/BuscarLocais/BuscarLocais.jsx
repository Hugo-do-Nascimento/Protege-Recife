import styles from "../BuscarLocais/BuscarLocais.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TituloPagina from "../../components/TituloPagina/TituloPagina";
import axios from "axios";

const BuscarLocais = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [abrigos, setAbrigos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbrigos = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://api.baserow.io/api/database/rows/table/318166/?user_field_names=true",
          headers: {
            Authorization: "Token T55hU00HK4IovT3n302mC6qCHaLmjDoT",
          },
        });

        setAbrigos(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar abrigos:", error);
        setIsLoading(false)
      }
    };

    fetchAbrigos();
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAbrigos = abrigos.filter(
    (abrigo) =>
      abrigo.Nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      abrigo.Endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (abrigo) => {
    navigate(`/detalhes/${abrigo.id}`, { state: { abrigo } });
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <TituloPagina titulo="Buscar Locais" />
      <br />

      <input
        className={styles.input}
        type="text"
        placeholder="Digite o nome do abrigo"
        value={searchTerm}
        onChange={handleInputChange}
      />

      <div className={styles.conjuntoCards}>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          filteredAbrigos.length > 0 ? (
            filteredAbrigos.map((abrigo) => (
              <div
                key={abrigo.id}
                onClick={() => handleCardClick(abrigo)}
                className={styles.CardContatos}
              >
                <h3>{abrigo.Nome}</h3>
                <p>{abrigo.Endereco}</p>
                <p>{abrigo.Telefone}</p>
                <p>{abrigo.Email}</p>
              </div>
            ))) : (
              <p>Não foi encontrado nenhum abrigo com esse nome</p>
            )
          
        )}
      </div>
    </div>
  );
};

export default BuscarLocais;
