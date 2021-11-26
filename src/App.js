import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './Header.js'
import PianoBackground from './Components/Background'
import PianoKeyboard from './piano';
import Welcome from './WelcomePage.jsx';

import './App.css';


function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <Header userName={userName}/>
     <PianoBackground/>
    <Routes>
      <Route path="/" element={<Welcome userName={userName} setUserName={setUserName} />}/>
      <Route path="/Playground" element={<PianoKeyboard />} />
      {/* <Route path="/Training" element={<PianoHero />} />  */}
    </Routes>
    </div>
  );
}

export default App;
