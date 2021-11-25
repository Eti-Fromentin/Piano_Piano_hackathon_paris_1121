import React, {useState} from 'react';
import { Navigate } from 'react-router';

// import styles from './WelcomePage.module.css';

function Welcome() {
    const [userName, setUserName] = useState('');


const goToPlayground = () => {
    localStorage.removeItem('username');
    localStorage.setItem('username', userName);
    Navigate('Playground')
};

return(
    <div>
        <div>
            <h1>Welcome to Piano Piano</h1>
        </div>
        <button type="button" className="PlayButton" onclick={goToPlayground}>Play piano</button>
    </div>
    )
};

export default Welcome;