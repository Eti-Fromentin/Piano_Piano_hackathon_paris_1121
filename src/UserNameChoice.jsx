import React from 'react';
import Modal from './Modal';

import styles from './styles/UserNameChoice.module.css';

function UserNameChoice({ pop, toggle, goToPlayground, setUserName }) {
  return (
    <div className={styles.UserNameChoice}>
      <Modal pop={pop} toggle={toggle} goToCharacterSelect={goToPlayground} setUserName={setUserName} />
    </div>
  );
}

export default UserNameChoice;