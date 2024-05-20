import Style from '../BuscarLocais/BuscarLocais.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
// import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
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

const StyledCardContent = styled(CardContent)({
  backgroundColor: '#3969c5',
  color: '#fff',
});

const StyledTypography = styled(Typography)({
  color: '#fff',
})

const StyledCard = styled(Card)({
  margin: '20px',
});
const BuscarLocais = () => {

  const dadosAbrigo = [
    {
      "logo": "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaGFkYSUyMG9udXxlbnwwfHwwfHx8MA%3D%3D",
      "nome": "Criança Esperança",
      "endereco": "Estrada da Conquista, 123, Ibura - Recife PE",
      "telefone": "(81) 98877-6655"
    },
    {
      'logo': 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaGFkYSUyMG9udXxlbnwwfHwwfHx8MA%3D%3D',
      'nome': 'Criança cidadã',
      'endereco': 'Estrada da Conquista, 123, Ibura - Recife PE',
      'telefone': '(81) 98888-7777',
    },
    {
      'logo':'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaGFkYSUyMG9udXxlbnwwfHwwfHx8MA%3D%3D',
      'nome':'Associação Casa do Amor',
      'endereco':'Estrada da Conquista, 123, Ibura - Recife PE',
      'telefone':'(81) 98888-7777',
    },
    {
      'logo':'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaGFkYSUyMG9udXxlbnwwfHwwfHx8MA%3D%3D',
      'nome':'Associação Casa do Amor',
      'endereco':'Estrada da Conquista, 123, Ibura - Recife PE',
      'telefone':'(81) 98888-7777',
    }
  ]

  return (
    <>
    <Navbar />
    <h2>Buscar Locais</h2>
    <Search>
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    <div className={Style.conjutoCards}>
      {dadosAbrigo.map((abrigo, index) => (
        <StyledCard key={index} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={abrigo.logo}
            alt={abrigo.nome}
          />
          <StyledCardContent>
            <StyledTypography gutterBottom variant="h5" component="div">
              {abrigo.nome}
            </StyledTypography>
            <StyledTypography variant="body2" color="text.secondary">
              Endereço: {abrigo.endereco} <br />
              Telefone: {abrigo.telefone}
            </StyledTypography>
          </StyledCardContent>
        </CardActionArea>
      </StyledCard>
      ))}
      
    </div>
    </>
  );
}

export default BuscarLocais