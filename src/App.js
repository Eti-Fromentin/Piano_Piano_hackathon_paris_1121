import Header from './Header.js'
import LandinPage from './LandingPage.js';
import React from 'react'
import PianoBackground from './Components/Background'

import './App.css';

function App() {
  return (
    <div className="App">
     <div>
      <Header />
      </div>
      <LandinPage />
     <PianoBackground/>
    </div>
  );
}

export default App;
