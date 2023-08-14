import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Routes,  Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home'
import Chat from './components/pages/Chat'
import History from './components/pages/History'
import Schedule from './components/pages/Schedule'
import Update from './components/pages/Update';

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
        <Route path='/Update/:uid' component={Update} />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
