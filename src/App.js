import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './Header.js'
import PianoBackground from './Components/Background'
import PianoKeyboard from './piano';
import Welcome from './WelcomePage.js';
import PianoHeroe from './PianoHeroe'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
     <PianoBackground/>
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/Playground" element={<PianoKeyboard />} />
      <Route path="/PianoHeroe" element={<PianoHeroe />} /> 
    </Routes>
    </div>
  );
}

export default App;