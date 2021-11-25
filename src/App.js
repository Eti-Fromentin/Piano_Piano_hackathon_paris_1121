import React from 'react'
import PianoBackground from './Components/Background'

import './App.css';
import PianoKeyboard from './piano';

function App() {
  return (
    <div className="App">
      <div className="PianoKeyBoard">
    <PianoKeyboard />
      </div>
     <PianoBackground/>
    </div>
  );
}

export default App;
