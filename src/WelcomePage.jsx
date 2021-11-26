import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import UserNameChoice from './UserNameChoice';

import styles from './styles/WelcomePage.module.css';

function Welcome() {
    const [pop, changePop] = useState(false);
    const [userName, setUserName] = useState('');

    const toggle = () => {
        changePop(!pop);
    }

    let navigate = useNavigate();
    
    const GoToPlayground = () => {
    localStorage.removeItem('username');
    localStorage.setItem('username', userName);
    navigate("/Playground");
};

return(
    <div>
        <div>
            <h1>Welcome to Piano Piano {userName} !</h1>
        </div>
        <p> Are you ready to play some 🎶? </p>

        <button className={styles.homeButton} onClick={toggle}>
        PLAY
        </button>
        <UserNameChoice pop={pop} toggle={toggle} GoToPlayground={GoToPlayground} setUserName={setUserName} />
    </div>
    )
};

export default Welcome;