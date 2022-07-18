import React from 'react';
import { Link } from 'react-router-dom';
import { AVATAR, BG, NAME, POSITION, SOCIAL, BUTTONS } from './Static';

const GetButtons = () => {
  return BUTTONS.map((btn, i) => {
    return <Link key={i} className={btn.title + '-btn'} to={'/' + btn.title}>
      <img src={btn.imgSrc} alt={btn.name} width={btn.width + 'px'}/>
    </Link>
  })
}

const GetSocial:any = () => {
  return SOCIAL.map((obj, i) => {
    return <a key={i} href={obj.link} target='_blank'><img src={obj.imgSrc} alt={obj.name}/></a>
  })
}

function Header() {
  return (
    <header className='app-header container-resp-col' style={{backgroundImage: `url(${BG})`}}>
      {GetButtons()}
      <section className='flex-item-1 avatar-box' >
        <img className='avatar' src={AVATAR} alt='avatar' width='60%'/>
      </section>
      <section className='flex-item-2 title-box'>
        <h1 className='my-name'>{NAME}</h1>
        <h2 className='my-position'>{POSITION}</h2>
        <hr style={{width: "70%"}} />
        <section className='socials'>
          {GetSocial()}
        </section>
      </section>
    </header>
  );
}

export default Header;
