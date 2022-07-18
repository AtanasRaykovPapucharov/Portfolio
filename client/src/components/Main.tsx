import React from 'react';
import Router from "./Router";
import { BG_MAIN } from './Static';

function Main() {
  return (
      <main className='app-main' style={{backgroundImage: `url(${BG_MAIN})`}}><Router /></main>
  );
}

export default Main;
