import React from 'react';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ChatMessage from '../Chat';

function Chat() {
  const value=localStorage.getItem('idb');
  console.log("userid"+value);
  return (
    <>
    <Navbar/>
    <ChatMessage />
    </>
  );
}

export default Chat;
