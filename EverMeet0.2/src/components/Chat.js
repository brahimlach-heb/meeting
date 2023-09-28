import React from 'react';
import './Chat.css';

const ChatMessage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-sidebar'>
        <div className='profile'>
          <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='Profile' />
        </div>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <i className='fa fa-search' />
        </div>
        <div className='friend-list'>
          <div className='friend'>
            <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='Friend' />
            <div className='friend-details'>
              <span className='friend-name'>John Doe</span>&nbsp;&nbsp;
              <span className='last-active-time'>18:18</span>
            </div>
          </div>
          {/* Add more friends here */}
        </div>
      </div>
      <div className='chat-content'>
        <div className='chat-header'>
          <img src='https://bootdey.com/img/Content/avatar/avatar6.png' alt='Header Avatar' />
          <div className='header-details'>
            <span className='header-name'>John Doe</span>&nbsp;&nbsp;
            <span className='header-status'>Online</span>
          </div>
        </div>
        {/* Previous Messages */}
        <div className='previous-messages'>
            <a onClick={() => previousMessage(20)}>Show Previous Message!</a>
          </div><br/>
        <div className='message-list'>
          
          <div className='message-body'>
            <div className='message-receiver'>
              <div className='message-text'>Hi, what are you doing?!</div>
              <span className='message-time'>Sun</span>
            </div>
          </div>
          <div className='message-body'>
            <div className='message-sender'>
              <div className='message-text'>I am doing nothing man!</div>
              <span className='message-time'>Sun</span>
            </div>
          </div>
        </div>
        <div className='message-input'>
          <i className='fa fa-smile-o fa-2x' />
          <textarea className='message-textarea' rows={1} id='comment' defaultValue={''} />
          <i className='fa fa-microphone fa-2x' aria-hidden='true' />
          <i className='fa fa-send fa-2x' aria-hidden='true' />
        </div>
      </div>
    </div>
  );
}

const previousMessage = (messageId) => {
  // Handle showing previous messages here
}

export default ChatMessage;
