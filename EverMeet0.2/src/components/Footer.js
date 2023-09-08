import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='h2F'>About Us</h2>
            <Link className='linkF' to='#'>How it works</Link>
            <Link className='linkF' to='#'>Testimonials</Link>
            <Link className='linkF' to='#'>Careers</Link>
            <Link className='linkF' to='#'>Investors</Link>
            <Link className='linkF' to='#'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='h2F'>Contact Us</h2>
            <Link className='linkF' to='#'>Contact</Link>
            <Link className='linkF' to='#'>Support</Link>
            <Link className='linkF' to='#'>Destinations</Link>
            <Link className='linkF' to='#'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='h2F'>Videos</h2>
            <Link className='linkF' to='#'>Submit Video</Link>
            <Link className='linkF' to='#'>Ambassadors</Link>
            <Link className='linkF' to='#'>Agency</Link>
            <Link className='linkF' to='#'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2 className='h2F'>Social Media</h2>
            <Link className='linkF' to='#'>Instagram</Link>
            <Link className='linkF' to='#'>Facebook</Link>
            <Link className='linkF' to='#'>Youtube</Link>
            <Link className='linkF' to='#'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='#' className='social-logo'>
            EverMeet
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>EverMeet © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='#'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='#'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='#'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
