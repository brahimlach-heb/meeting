import React from 'react';
import '../../App.css';
import Meet from '../Meet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../Home.css'
import Navbar from '../Navbar';

function History(){
    return(
        <>
        <Navbar/>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <h1>Previous Meetings</h1>
      </div>
      <Footer />
        </>
    );
}

export default History;