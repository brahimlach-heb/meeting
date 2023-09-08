import React from 'react';
import Meet from '../Meet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../Meet.css';
import Navbar from '../Navbar';

function History(){
    return(
        <>
        <Navbar/>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <h1 className='h1M'>Previous&nbsp;Meetings</h1>
      </div>
      <Footer />
        </>
    );
}

export default History;