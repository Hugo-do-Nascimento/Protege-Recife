import styles from '../BuscarLocais/BuscarLocais.module.css';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  border: '1px solid #d9d9d9',
  backgroundColor: '#d9d9d9',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  margin: '20px',
  height: '50px'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: calc(1em + ${theme.spacing(4)}),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const BuscarLocais = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const dadosAbrigo = [
    {
      "id": 1,
      "nome": "Igreja Batista Córrego do Tiro (Abrigo)",
      "endereco": "Rua Prof. José Amarino dos Reis, 392",
      "telefone": "(81) 98888-7777",
      "email": "hugovinitek@gmail.com",
    },
    {
      "id": 2,
      'nome': 'Escola Municipal Campina do Barreto - Cajueiro (Abrigo)',
      'endereco': 'Rua Virgílio de Melo Franco, 28',
      'telefone': '(81) 98888-7777',
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 3,
      'nome':'Escola Municipal Ricardo Gama (Abrigo)',
      'endereco':'Rua Guaíra, 148',
      'telefone':'(81) 98888-7777',
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 4,
      'nome':'Casa de Dona Érica (Ponto de Apoio) (Liberado)',
      'endereco':'Rua Tinto, 153',
      'telefone':'(81) 98888-7777',
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 5,
      'nome':'Associação de Moradores Vila Vintém II (Ponto de Apoio) (Associação - Liberado)',
      'endereco':'Avenida Vereador Otacílio de Azevedo, 730',
      'telefone':'(81) 98888-7777',
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 6,
      "nome": "Escola Municipal Casarão do Barbalho (Abrigo) (Municpal - Liberado)",
      "endereco": "Estrada do Barbalho, 1595, Iputinga",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 7,
      "nome": "Escola Municipal Diná de Oliveira (Abrigo) (Municpal - Liberado)",
      "endereco": "Rua São Mateus, S-N, Iputinga",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 8,
      "nome": "Igreja Poço da Panela (Ponto de apoio) (Igreja - Liberado)",
      "endereco": "Rua Antônio Vitrúvio, 71",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 9,
      "nome": "Paróquia Nossa Sra. dos Remédios (Caranguejo-Tabaiares) (Ponto de apoio)",
      "endereco": "Estrada dos Remédios, 1603",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 10,
      "nome": "Igreja Batista do Caçote (Abrigo) (Igreja - Liberado)",
      "endereco": "Rua Dona Ana Aurora, 2042 - Areias",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 11,
      "nome": "Igreja Orai (Abrigo) (Igreja - Liberado)",
      "endereco": "Estrada do Barbalho, 1595, Iputinga",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 12,
      "nome": "Centro de Apoio Social Esportivio e Cultural do Ibura (Ponto Apoio) (Liberado)",
      "endereco": "Estrada do Barbalho, 1595, Iputinga",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 13,
      "nome": "Escola Municipal Adauto Pontes (Abrigo) (Municpal - Liberado)",
      "endereco": "Rua sertânia, 35 - Jordão Alto, Recife - PE, 51260-390",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 14,
      "nome": "Associação Asa Branca (Ponto de apoio) (Associação - Liberado)",
      "endereco": "Travessa Benigno Jordão de vasconceloss, 41",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 15,
      "nome": "Escola Municipal Poeta Paulo Bandeira da Cruz (Abrigo) (Municpal - Liberado)",
      "endereco": "Rua das Panelas, 28, UR 02, COHAB",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 16,
      "nome": "E.M. 27 de Novembro (Abrigo) (Municpal - Liberado)",
      "endereco": "Av. Doze de junho, 1120, UR 05, COHAB",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
    {
      "id": 17,
      "nome": "Escola Municipal Maroa de Sampaio Lucena (Abrigo) (Municpal - Liberado)",
      "endereco": "Av. Pernambuco, S-N, UR 01, COHAB",
      "telefone": "(81) 98877-6655",
      "email": "hugonascimento704@gmail.com",
    },
  ];


  const filteredAbrigos = dadosAbrigo.filter((abrigo) => 
    (abrigo.nome.toLowerCase().includes(searchTerm.toLowerCase())) || (abrigo.endereco.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCardClick = (abrigo) => {
    navigate(/detalhes/${abrigo.id}, { state: { abrigo }});
  };  

  return (
    <>
    <Navbar />
    <TituloPagina titulo='Buscar Locais' />
      <br />
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar abrigo..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleInputChange}
            />
          </Search>
        </Toolbar>

    <div className={styles.conjuntoCards}>
      {filteredAbrigos.map((abrigo, index) => (
        <div onClick={() => handleCardClick(abrigo)} className={styles.CardContatos}>
          <h3>{abrigo.nome}</h3>
          <p>{abrigo.endereco}</p>
          <p>{abrigo.telefone}</p>
          <p>{abrigo.email}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default BuscarLocais;