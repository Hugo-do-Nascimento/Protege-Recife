import Style from '../BuscarLocais/BuscarLocais.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';

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
    <h2>Buscar Locais</h2>
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