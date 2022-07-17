import React from "react";
import {hydrate, render} from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import App from './components/App';
import './sass/index.scss';

const wrapper = document.getElementById('root');

const main = () => {
  return <Router>
    <App />
  </Router>
}

if (wrapper.hasChildNodes()) {
  hydrate(
    main(),
    wrapper 
  );
} else {
  render(
    main(),
    wrapper 
  );
}
