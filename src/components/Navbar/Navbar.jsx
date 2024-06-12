// App.jsx

import style from './../Navbar/Navbar.module.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import profile from '../../assets/iconeProfile.png';
import Logo from '../../assets/logoL.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
return(

  <div className={style.Container}>
    <div className={style.LogoNome}>
      <img src={Logo} alt='logo' width={150}></img>
  </div>    
  <div className={style.profileMenu}>
      <button className={style.profileButton} onClick={toggleMenu}>
        <img
          className={style.profileAvatar}
          src={profile}   
          alt="Avatar"
        />
        <span className={style.profileNome}></span>
      </button>
      {menuOpen && (
        <div className={style.profileDropdown}>
          <ul className={style.profileOptions}>
            <li className={style.profileOption}>Perfil</li>
            <li className={style.profileOption} onClick={handleLogout} >Sair</li>
          </ul>
        </div>
      )}
    </div>
  </div>

      
)
}

export default Navbar;
