import React from 'react';
import logo from './assets/logo.png'
import styles from './Header.module.css'

function Header() {

  return (

<nav className={styles.navBar} >
  
  <img className={styles.logo} src={logo} alt='logo' />
  <div className={styles.links}>
  <div>Welcome</div>
  <div>Playground</div>
  <div>Piano Heroes</div>
  </div>

</nav>
);
}

export default Header;