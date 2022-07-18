import Html from '../assets/image/html.png';
import Sass from '../assets/image/sass.png'
import Js from '../assets/image/js.png';
import Ts from '../assets/image/typescript.png';
import ReactJs from '../assets/image/react.png';
import Node from '../assets/image/node.png';
import Csharp from '../assets/image/csharp.png';

import Github from '../assets/image/GitHub-Emblem.png';
import Linkedin from '../assets/image/Linkedin-Logo.png';

import HomeIco from '../assets/image/home1.png';
import CVIco from '../assets/image/cv1.png';
import Avatar from '../assets/image/avatar.jpg';

import Volley from '../assets/image/volley.png';
import Snake from '../assets/image/snake.png';
import Portfolio from '../assets/image/portfolio.png'
import Math from '../assets/image/math.png';
import Testing from '../assets/image/testing.png';
import Dictit from '../assets/image/dictit.png';
import StateManager from '../assets/image/state-manager.png';
import Rest from '../assets/image/rest-api.svg';
import MyPlace from '../assets/image/myplace.png';

import Bg from '../assets/image/bg3.jpg';
import Arrow from '../assets/image/arrow.png'
import MainBg from '../assets/image/bg.gif';;

export const ARROW = Arrow;
export const BG = Bg;
export const BG_MAIN = MainBg;
export const AVATAR = Avatar;

export const NAME:string = 'Atanas Raykov Papucharov';
export const POSITION:string = 'Front-end Developer';

export const KEYS = [
  {
    word: 'OOP'
  }, 
  {
    word: 'MVVM'
  }, 
  {
    word: 'MVC'
  }, 
  {
    word: 'REST API'
  }, 
  {
    word: 'Unit Testing'
  }, 
  {
    word: 'Component State'
  }, 
  {
    word: 'Design Patterns'
  }
]

export const TECH = [
  {
    name: 'CSharp',
    link: '/csharp-view',
    imgSrc: Csharp
  },
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

export const SOCIAL = [
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

export const BUTTONS = [
    {
        name: 'Home',
        imgSrc: HomeIco,
        title: 'home',
        width: 50
    },
    {
        name: 'CV',
        imgSrc: CVIco,
        title: 'cv',
        width: 35
    }
]

export const PROJECTS = [
  {
    name: 'Portfolio',
    link: 'https://github.com/AtanasRaykovPapucharov/Portfolio',
    img: Portfolio,
    tech: [ Html, Sass, Ts, ReactJs ],
    tags: ['all', 'html', 'sass', 'ts', 'react']
  },
  {
    name: 'Math Test App',
    link: 'https://github.com/AtanasRaykovPapucharov/hakamatata',
    img: Math,
    tech: [ Html, Sass, Js, ReactJs ],
    tags: ['all', 'html', 'sass', 'js', 'react', 'mvc', 'component-state']
  },
  {
    name: 'Volleyball Game',
    link: 'https://github.com/AtanasRaykovPapucharov/Volleyball',
    img: Volley,
    tech: [ Csharp ],
    tags: ['all', 'csharp', 'oop']
  },
  {
    name: 'Simple State Manager',
    link: 'https://github.com/AtanasRaykovPapucharov/simpleReactiveComponentStateManager',
    img: StateManager,
    tech: [ Html,Js ],
    tags: ['all', 'html', 'js', 'design-patterns', 'component-state']
  },
  {
    name: 'NodeJS REST API',
    link: 'https://github.com/AtanasRaykovPapucharov/messages/tree/master/app/server',
    img: Rest,
    tech: [ Js, Node],
    tags: ['all', 'js', 'nodejs', 'rest-api']
  },
  {
    name: 'Unit Testing',
    link: 'https://github.com/AtanasRaykovPapucharov/messages/tree/master/test',
    img: Testing,
      tech: [ Js, Node],
      tags: ['all', 'js', 'nodejs', 'unit-testing', 'rest-api']
  },
  {
    name: 'myplace NodeJS App',
    link: 'https://github.com/AtanasRaykovPapucharov/myplace',
    img: MyPlace,
    tech: [ Html, Sass, Js, Node],
    tags: ['all', 'html', 'sass', 'js', 'nodejs', 'rest-api']
  },
  {
    name: 'Snake TS Game',
    link: 'https://github.com/AtanasRaykovPapucharov/MySnake',
    img: Snake,
    tech: [ Html, Sass, Ts],
    tags: ['all', 'html', 'sass', 'ts', 'oop']
  },
  {
    name: 'DictIt WPF .Net App',
    link: 'https://github.com/AtanasRaykovPapucharov/DictIt',
    img: Dictit,
    tech: [ Csharp ],
    tags: ['all', 'csharp', 'mvvm']
  },
]

export const ROUTES = [
  'csharp', 
  'html', 
  'sass', 
  'ts', 
  'js', 
  'react', 
  'nodejs', 
  'oop', 
  'mvvm', 
  'mvc',
  'rest-api', 
  'unit-testing', 
  'component-state',
  'design-patterns'
];
