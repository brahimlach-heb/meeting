import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileImage from '../images/img-2.jpg'; 


function Navbar() {
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
             EverMeet.
            <i class='fab fa-typo3' />
          </Link>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;