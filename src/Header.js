import React from 'react';
import logo from './assets/logo.png'
import styles from './styles/Header.module.css'
import {NavLink} from 'react-router-dom'

function Header() {

  const userName = localStorage.getItem('username');

  return (

<nav className={styles.navBar} >

  <NavLink to="/"> <img className={styles.logo} src={logo} alt='logo' /> </NavLink>
  <NavLink to="/Playground">Playground</NavLink>
  <NavLink to="/Piano Hero">{userName}'s Piano</NavLink>

</nav>
);
}

export default Header;