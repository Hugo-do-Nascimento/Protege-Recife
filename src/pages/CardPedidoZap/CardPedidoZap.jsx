import Navbar from '../../components/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import * as React from 'react';
import styles from '../CardPedidoZap/CardPedidoZap.module.css';
import Alert from '@mui/material/Alert';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';


const DetalhesAbrigo = () => {
  const location = useLocation();
  const { abrigo } = location.state || {}; // Pega o estado da navegação ou define como objeto vazio

  const notify = () => {
    toast.success('E-mail enviado com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

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
      to_name: abrigo?.Nome,
      to_email: abrigo?.Email,
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
      // alert('E-mail enviado com sucesso! A resposta do seu pedido chegará por email');
      notify();
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
        <Typography variant="h4" className={styles.title}>{abrigo.Nome}</Typography>
        <Typography variant="body1" className={styles.detail}>Endereço: {abrigo.Endereco}</Typography>
        <Typography variant="body1" className={styles.detail}>Telefone: {abrigo.Telefone}</Typography>
        <Typography variant="body1" className={styles.detail}>Email: {abrigo.Email}</Typography>
        <Button variant="contained" onClick={enviarEmail}>Solicitar Abrigo</Button>
        <ToastContainer />
      </div>
    </>
  );
};

export default DetalhesAbrigo;