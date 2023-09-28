import React from 'react';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ChatMessage from '../Chat';

function Chat() {
  return(
    <>
    <Navbar/>
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <ChatMessage />
    </div>
    
    </>
  );
}

export default Chat;
