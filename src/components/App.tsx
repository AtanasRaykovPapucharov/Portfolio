import React from 'react';
import Logo from '../assets/image/logo.png';
import Natviz from '../assets/pdf/nadviz.pdf';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo"/>
      </header>
      App works!
      <iframe src={Natviz} width="80%" height="300"></iframe>
    </div>
  );
}

export default App;
