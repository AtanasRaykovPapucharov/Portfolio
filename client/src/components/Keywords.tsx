import React from 'react';
import { Link } from 'react-router-dom';
import { KEYS } from './Static';

function Keywords() {
  return (
    <nav className='app-keys'>
      {KEYS.map((k, i) => {
        return <Link key={i} className='key tag' to={'/' + k.word.replace(' ', '-').toLocaleLowerCase() + '-view'}>
            {k.word}
        </Link>
      })}
    </nav>
  );
}

export default Keywords;