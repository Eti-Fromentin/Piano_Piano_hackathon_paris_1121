import React, {useState} from 'react';
import { Navigate } from 'react-router';

import UserNameChoice from './UserNameChoice';

import styles from './styles/WelcomePage.module.css';

function Welcome() {
    const [pop, changePop] = useState(false);
    const [userName, setUserName] = useState('');

    const toggle = () => {
        changePop(!pop);
    }


const goToPlayground = () => {
    localStorage.removeItem('username');
    localStorage.setItem('username', userName);
    // Navigate({Playground})
};

return(
    <div>
        <div>
            <h1>Welcome to Piano Piano</h1>
        </div>
        <p> Are you ready to play some piano notes ? </p>

        <button className={styles.homeButton} onClick={toggle}>
        ENTER
        </button>
        <UserNameChoice pop={pop} toggle={toggle} goToPlayground={goToPlayground} setUserName={setUserName} />
    </div>
    )
};

export default Welcome;