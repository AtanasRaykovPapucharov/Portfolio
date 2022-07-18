import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './Static';

import ListView from '../views/ListView';
import CvView from '../views/CvView';

const Router = () => {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={ <Navigate to='/home' /> }/>

        <Route path='/home' element={ ListView('all') } />
        <Route path='/cv' element={ <CvView /> } />

        {ROUTES.map((el, i) => {
          return <Route key={i} path={`/${el}-view`} element={ ListView(el) } />
        })}
        
        <Route path='/*' element={ <Navigate to='/home' /> }/>
      </Routes>
    </main>
  );
}

export default Router;