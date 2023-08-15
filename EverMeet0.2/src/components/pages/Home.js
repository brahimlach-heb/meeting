import React from 'react';
import '../../App.css';
import Meet from '../Meet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../Home.css'
import Navbar from '../Navbar';

function Home(){
    return(
      <>
      <Navbar/>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Meet />
      </div>
      <Footer />
      </>
    );
}

export default Home;