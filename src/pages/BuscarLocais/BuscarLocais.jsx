import styles from '../BuscarLocais/BuscarLocais.module.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
  const [abrigos, setAbrigos] = useState([]);

  useEffect(() => {
    fetchAbrigos();
  }, []);

  const fetchAbrigos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/abrigos/all/', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar abrigos');
      }  
      const data = await response.json();
      setAbrigos(data);
    } catch (error) {
      console.error('Erro ao buscar abrigos:', error);
      alert('Erro ao buscar abrigos: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredAbrigos = abrigos.filter((abrigo) => 
    (abrigo.nome.toLowerCase().includes(searchTerm.toLowerCase())) || (abrigo.enderecoAbrigo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCardClick = (abrigo) => {
    navigate(`/detalhes/${abrigo.id}`, { state: { abrigo }});
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
        <div key={abrigo.id} onClick={() => handleCardClick(abrigo)} className={styles.CardContatos}>
          <h3>{abrigo.nome}</h3>
          <p>{abrigo.enderecoAbrigo}</p>
          <p>{abrigo.numTelefone}</p>
          <p>{abrigo.email}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default BuscarLocais;