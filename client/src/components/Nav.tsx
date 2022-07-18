import React from 'react';
import { Link } from 'react-router-dom';
import { TECH } from './Static';

function Nav() {
  return (
    <nav className='app-nav technologies container-flex-row'>
      {TECH.map((obj, i) => {
        return <article key={i} id={obj.name} className='tech-box flex-item-1'>
          <Link to={obj.link}><img src={obj.imgSrc} alt={obj.name} /></Link>
        </article>
      })}
    </nav>
  );
}

export default Nav;