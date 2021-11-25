import Header from './Header.js'
import React from 'react'
import PianoBackground from './Components/Background'
import PianoHeroe from './PianoHeroe.js';

import './App.css';
import PianoKeyboard from './piano';

function App() {
  return (
    <div className="App">
  
      <Header />
     
<PianoHeroe />
      <div className="PianoKeyBoard">
     <PianoBackground/>
     </div>
    <PianoKeyboard />
    </div>
  );
}

export default App;
