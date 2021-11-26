import React from 'react';
import logo from './assets/logo.png'
import styles from './styles/Header.module.css'
import {NavLink} from 'react-router-dom'

function Header({userName}) {

  return (

<nav className={styles.navBar} >

  <NavLink to="/"> <img className={styles.logo} src={logo} alt='logo' /> </NavLink>
  <NavLink to="/Playground">Playground</NavLink>
  <NavLink to="/Training">Let's Train {userName}!</NavLink>
  <br></br>

</nav>
);
}

export default Header;