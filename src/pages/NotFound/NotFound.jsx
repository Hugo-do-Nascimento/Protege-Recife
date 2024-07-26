import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Style from '../NotFound/NotFound.module.css';
import ImagemErro from '../../assets/imagemErro404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <Navbar />
        <div className={Style.retangulo}>
          <h1 className={Style.h1}>Nenhum resultado encontrado...</h1>
          <div>
            <p className={Style.textos}>Esta página não existe ou foi removida!</p>
            <p className={Style.textos} >Por favor retorne ao início</p>
          </div>

          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={Style.button}>
              Voltar ao início
            </div>
          </Link>
          
          <img src={ImagemErro} width={240} height={240} alt='imagem de erro' />
        </div>
    </>
  )
}

export default NotFound;