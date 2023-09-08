import React from 'react';

import { Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Chat from './components/pages/Chat'
import History from './components/pages/History'
import Schedule from './components/pages/Schedule'
import Update from './components/pages/Update';
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import PrivateComponent from "./components/pages/PrivateComponent";
import VideoCallPage from './components/pages/VideoCallPage'
import Acceuil from './components/pages/Acceuil';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Acceuil />}></Route>
        <Route path='/login' element={<Login />}></Route>


        <Route element={<PrivateComponent />}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/Chat' element={<Chat/>}></Route>
          <Route path='/History' element={<History/>}></Route>
          <Route path='/Schedule' element={<Schedule/>}></Route>
          <Route path='/Update/:uid' element={<Update/>}></Route>
          <Route path='/call' element={<VideoCallPage/>}></Route>
        </Route>

        <Route path='/signup' element={<Signin />}></Route>

      </Routes>


    </>
  );
}

export default App;
