import Navbar from '../../components/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import styles from '../CardPedidoZap/CardPedidoZap.module.css';
import Alert from '@mui/material/Alert';
import TituloPagina from '../../components/TituloPagina/TituloPagina';


const DetalhesAbrigo = () => {
  const location = useLocation();
  const { abrigo } = location.state || {}; // Pega o estado da navegação ou define como objeto vazio

  const enviarEmail = () => {

    const dadosUsuario = {
      nomeUsuario: "Maria das Dores",
      emailUsuario: "hugovinitek@gmail.com",
      numeroCriancas: 2,
      numeroAdultoss: 3,
      idadesCriancas: "12 e 4",
      idadesAdultos: "30, 25, 40",
      telefone: "(81) 98787-8989"  
    };

    const templateParams = {
      to_name: abrigo?.nome,
      to_email: abrigo?.email,
      from_name: dadosUsuario.nomeUsuario,
      from_email: dadosUsuario.emailUsuario,
      num_criancas: dadosUsuario.numeroCriancas,
      num_adultos: dadosUsuario.numeroAdultoss,
      idades_criancas: dadosUsuario.idadesCriancas,
      idades_adultos: dadosUsuario.idadesAdultos,
      telefone: dadosUsuario.telefone,
      mensagem: `Eu ${dadosUsuario.nomeUsuario}, usuário do Protege Recife, solicito abrigo em seu espaço.`
    };

    console.log(templateParams.to_email);
    emailjs.send(
      'service_tnpnat3',
      'template_moers4a',
      templateParams,
      '5hxABj4wpeY7ldYa5'
    ).then((response) => {
      console.log('E-mail enviado com sucesso!', response.status, response.text);
      alert('E-mail enviado com sucesso! A resposta do seu pedido chegará por email');
    }).catch((err) => {
      console.error('Erro ao enviar o e-mail:', err);
      alert('Erro ao enviar o e-mail: ' + err.message);
    });
  };

  return (
    <>
      <Navbar />
      <TituloPagina titulo={"Solicitar abrigo"}/>
      <Alert variant="outlined" severity="info" className={styles.alerta}>
            O resultado da sua solicitação chegará no seu email de cadastro.
        </Alert>
      <div className={styles.cardDetails} >
        <Typography variant="h4" className={styles.title}>{abrigo.nome}</Typography>
        <Typography variant="body1" className={styles.detail}>Endereço: {abrigo.enderecoAbrigo}</Typography>
        <Typography variant="body1" className={styles.detail}>Telefone: {abrigo.numTelefone}</Typography>
        <Typography variant="body1" className={styles.detail}>Email: {abrigo.email}</Typography>
        <Button variant="contained" onClick={enviarEmail}>Solicitar Abrigo</Button>
      </div>
    </>
  );
};

export default DetalhesAbrigo;