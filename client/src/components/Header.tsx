import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/image/avatar.jpg';
import Github from '../assets/image/GitHub-Emblem.png';
import Linkedin from '../assets/image/Linkedin-Logo.png';
import HomeIcos from '../assets/image/home.png';
import CvIco from '../assets/image/cv.png';

const socials = [
  {
    name: 'github',
    link: 'https://github.com/AtanasRaykovPapucharov',
    imgSrc: Github
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/atanas-papucharov-b5957a48/',
    imgSrc: Linkedin
  }
]

function Header() {
  return (
    <header className='app-header container-resp-col'>
      <Link className='home-btn' to='/home'><img src={HomeIcos} alt='Home' width='50px'/></Link>
      <Link className='cv-btn' to='/cv'><img src={CvIco} alt='CV' width='35px'/></Link>
      <section className='flex-item-1 avatar-box' >
        <img className='avatar' src={Avatar} alt='avatar' />
      </section>
      <section className='flex-item-2 title-box'>
        <h1>Atanas Raykov Papucharov</h1>
        <h2>Front-end Developer</h2>
        <hr style={{width: "70%"}} />
        <section className='socials'>
          {socials.map((obj, i) => {
            return <a key={i} href={obj.link} target='_blank'><img src={obj.imgSrc} alt={obj.name}/></a>
          })}
        </section>
      </section>

    </header>
  );
}

export default Header;
