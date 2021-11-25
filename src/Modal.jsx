import React from 'react';

import styles from './styles/Modal.module.css';

function Modal({ pop, goToPlayground, setUserName }) {
  const handleChange = (e) => setUserName(e.target.value);

  return pop ? (
    <React.Fragment>
      <div className={styles.wrapper}>
        <label className={styles.labelName} htmlform="name" htmlFor="name">
          Enter your Name
        </label>
        <input className={styles.windowName} type="texte" id="name" name="name" onChange={handleChange} />
        <button className={styles.nextButton} onClick={goToPlayground}>
          Next
        </button>
      </div>
    </React.Fragment>
  ) : null;
}

export default Modal;