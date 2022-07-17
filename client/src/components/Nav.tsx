import React from 'react';
import { Link } from 'react-router-dom';
import Html from '../assets/image/html.png';
import Sass from '../assets/image/sass.png'
import Js from '../assets/image/js.png';
import Ts from '../assets/image/typescript.png';
import ReactJs from '../assets/image/react.png';
import Node from '../assets/image/node.png';

const techs = [
  {
    name: 'HTML',
    link: '/html-view',
    imgSrc: Html
  },
  {
    name: 'SASS',
    link: '/sass-view',
    imgSrc: Sass
  },
  {
    name: 'JavaScript',
    link: '/js-view',
    imgSrc: Js
  },
  {
    name: 'TypeScript',
    link: '/ts-view',
    imgSrc: Ts
  },
  {
    name: 'React',
    link: '/react-view',
    imgSrc: ReactJs
  },
  {
    name: 'NodeJS',
    link: '/nodejs-view',
    imgSrc: Node
  }
];

function Nav() {
  return (
    <nav className='app-nav technologies container-flex-row'>
      {techs.map((obj, i) => {
        return <article key={i} className='tech-box flex-item-1'><Link to={obj.link}><img src={obj.imgSrc} alt={obj.name} /></Link></article>
      })}
    </nav>
  );
}

export default Nav;
