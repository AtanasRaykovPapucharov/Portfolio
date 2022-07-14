import React from 'react';
import Avatar from '../assets/image/avatar.jpg';
import SnakeGame from '../games/snake/SnakeGame'

function App() {
  return (
    <div className='app'>
      <header className='app-header container-resp-col'>
        <article className='flex-item-1'><img className='avatar' src={Avatar} alt='Logo' /></article>
        <article className='flex-item-3'>
          <h1>Atanas Raykov Papucharov</h1>
          <h2>Front-end Developer</h2>
        </article>
      </header>
      <main className='app-main'>CONTENT</main>
      <nav className='app-nav'>NAV</nav>
    </div>
  );
}

export default App;
