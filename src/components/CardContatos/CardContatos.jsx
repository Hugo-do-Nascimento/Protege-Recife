import React from 'react';
import styles from './../CardContatos/CardContatos.module.css';
import { Button } from '@mui/material';

const CardContatos = ({ nomeOrgao, numeroContato }) => {
  return (
    <div className={styles.CardContatos}>
        <h3>{nomeOrgao}</h3>
        <p>{numeroContato}</p>
        <a href={`tel:${numeroContato}`}>
        <Button variant="contained">Ligar</Button>
        </a>
    </div>
  )
}

export default CardContatos;