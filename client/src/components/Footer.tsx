import React, { MouseEventHandler } from 'react';
import { ARROW } from './Static';

const GoTop:MouseEventHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function Footer() {
  return (
    <footer className='app-footer'>
        <img src={ARROW} alt="GO TOP" width='100%' title='GO TOP' onClick={GoTop}/>
    </footer>
  );
}

export default Footer;