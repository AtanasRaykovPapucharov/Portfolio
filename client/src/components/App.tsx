import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Keywords from './Keywords';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Keywords />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
