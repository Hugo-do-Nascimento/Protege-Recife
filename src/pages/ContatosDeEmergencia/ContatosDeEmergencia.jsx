import React from 'react';
import styles from './../ContatosDeEmergencia/ContatosDeEmergencia.module.css';
import CardContatos from '../../components/CardContatos/CardContatos';
import Navbar from '../../components/Navbar/Navbar';

const ContatosDeEmergencia = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.h1}>Contados de Emergência</h1>
      <CardContatos nomeOrgao="Defesa Civil Recife" numeroContato="0800 081 3400" />
      <CardContatos nomeOrgao="Defesa Civil PE" numeroContato="199" />
      <CardContatos nomeOrgao="SAMU" numeroContato="192" />
      <CardContatos nomeOrgao="Bombeiros" numeroContato="193" />
      <CardContatos nomeOrgao="Polícia Militar" numeroContato="190" />
    </div>
  )
}

export default ContatosDeEmergencia