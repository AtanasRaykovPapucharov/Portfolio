import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeView from '../views/HomeView';
import CvView from '../views/CvView';

import HtmlView from '../views/HtmlView';
import SassView from '../views/SassView';
import JsView from '../views/JsView';
import TsView from '../views/TsView';
import ReactView from '../views/ReactView';
import NodejsView from '../views/NodejsView';

const Router = () => {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={ <Navigate to='/home' /> }/>
        <Route path='/home' element={ <HomeView /> } />
        <Route path='/cv' element={ <CvView /> } />
        <Route path='/html-view' element={ <HtmlView /> } />
        <Route path='/sass-view' element={ <SassView /> } />
        <Route path='/js-view' element={ <JsView /> } />
        <Route path='/ts-view' element={ <TsView /> } />
        <Route path='/react-view' element={ <ReactView /> } />
        <Route path='/nodejs-view' element={ <NodejsView /> } />
        <Route path='/*' element={ <Navigate to='/home' /> }/>
      </Routes>
    </main>
  );
}

export default Router;