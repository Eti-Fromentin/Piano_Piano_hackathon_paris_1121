import Header from './Header.js'
import LandinPage from './LandingPage.js';
import React from 'react'
import PianoBackground from './Components/Background'

import './App.css';
import PianoKeyboard from './piano';

function App() {
  return (
    <div className="App">
     <div>
      <Header />
      </div>
     <PianoBackground/>
    <PianoKeyboard />
    </div>
  );
}

export default App;
