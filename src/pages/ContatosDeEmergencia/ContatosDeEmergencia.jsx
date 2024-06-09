import React from 'react';
import styles from './../ContatosDeEmergencia/ContatosDeEmergencia.module.css';
import CardContatos from '../../components/CardContatos/CardContatos';
import Navbar from '../../components/Navbar/Navbar';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
const ContatosDeEmergencia = () => {

  return (
    <div className={styles.container}>
      <Navbar />
      <TituloPagina titulo="Contatos de Emergência" />
      <CardContatos nomeOrgao="Defesa Civil Recife (24h)" numeroContato="0800 081 3400" />
      <CardContatos nomeOrgao="Defesa Civil PE" numeroContato="199" />
      <CardContatos nomeOrgao='CTTU' numeroContato='0800 081 1078'/>
      <CardContatos nomeOrgao='Emlurb' numeroContato='156'/>
      <CardContatos nomeOrgao='Neoenergia' numeroContato='116'/>
      <CardContatos nomeOrgao="SAMU" numeroContato="192"/>
      <CardContatos nomeOrgao="Corpo de Bombeiros" numeroContato="193" />
      <CardContatos nomeOrgao="Polícia Militar PE" numeroContato="180"/>
    </div>
  )
}

export default ContatosDeEmergencia;