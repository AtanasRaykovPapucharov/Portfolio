import React from 'react';
import CvPdf from '../assets/pdf/cv-atanas-papucharov.pdf';

function Cv() {
  return (
    <div className='cv-view'>
      <iframe src={CvPdf} width='100%' height='540px' allowFullScreen />
    </div>
  );
}

export default Cv;
