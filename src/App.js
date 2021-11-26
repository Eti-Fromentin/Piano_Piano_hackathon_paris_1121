import React from 'react'
<<<<<<< HEAD
=======
import {Routes, Route} from 'react-router-dom'

>>>>>>> dev
import Header from './Header.js'
import PianoBackground from './Components/Background'
import PianoKeyboard from './piano';
import Welcome from './WelcomePage.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
     <PianoBackground/>
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/Playground" element={<PianoKeyboard />} />
      {/* <Route path="/Piano Hero" element={<PianoHero />} /> */}
    </Routes>
    </div>
  );
}

export default App;
