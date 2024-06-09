import React from 'react'
import styles from '../TituloPagina/TituloPagina.module.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';


const TituloPagina = ({ titulo }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

  return (
    <div className={styles.div1}>
        <ArrowBackIosNewRoundedIcon className={styles.svg} onClick={handleBack} />
        <h2 className={styles.h2}>{titulo}</h2>
    </div>
  )
}

export default TituloPagina;