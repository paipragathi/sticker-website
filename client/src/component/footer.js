import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
// import { useState, useEffect } from 'react';
export default function Footer() {
 
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-centre p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', textAlign: 'centre' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
       STICK-me
        </a>
      </div>
    </MDBFooter>
  );
} 