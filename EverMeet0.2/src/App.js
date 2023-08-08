import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Routes,  Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home'
import Chat from './components/pages/Chat'
import History from './components/pages/History'
import Schedule from './components/pages/Schedule'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' exact  component={Home}/>
        <Route path='/Chat' component={Chat} />
        <Route path='/History' component={History} />
        <Route path='/Schedule' component={Schedule} />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
