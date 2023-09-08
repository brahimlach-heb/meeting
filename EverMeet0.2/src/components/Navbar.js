import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';
import profileImage from '../images/img-2.jpg'; 


function Navbar() {

    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout=()=>{
        localStorage.clear();
        navigate('/');
    }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
             EverMeet.
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' >
            
          </div>
          <ul className='nav-menu'>
              {
                  auth?
                    <>
                      <li className='nav-item'>
                      <div className='profile-picture'>
                        <img src={profileImage} alt='Profile' className='profile-img' />
                      </div>
                      </li>
                    </>
                      :<>
                          <li className='nav-item'>
                              <Link to='/' className='nav-links'>
                                  Signin
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to='signup' className='nav-links'>
                                  Signup
                              </Link>
                          </li>

                      </>
              }








          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
