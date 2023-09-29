import React, { useEffect, useState } from 'react';
import './Chat.css';


const ChatMessage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [name, setName] = useState('');
  const [idconv,setIdconv]=useState();
  const value=localStorage.getItem('idb');

  console.log("Chatuserid:"+value);
  const [list, setList] = useState([]);
  const [click, setClick] = useState(false);
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    if(searchValue=='')
    setClick(false);
  };

  useEffect(() => {
   if(searchValue!=''){
    fetch('http://localhost:8080/chat/amis/' + searchValue)
      .then(response => {
        if (!response.ok) {
          console.log("is not exist");
          setClick(false);
        }else
        setClick(true);
        return response.json();
      }).then(data => {
        setList([data]);
        console.log("wx convert", list);
      }).catch(error => {
        console.log("had siyeed makaynch");
        setClick(false);
      });}
      else{
        fetch(`${process.env.REACT_APP_BASE_URL}/chat/chatlist/${value}`)
        .then(response => {
          if (!response.ok) {
            console.log("hadchi ma5adamch");
            setClick(false);
          }
          setClick(true);
          return response.json();
        }).then(data => {
          console.log("s7abi:", data);
          setList(data);
          console.log("wx convert", list);
        }).catch(error => {
          console.log("had siyeed makaynch");
          setClick(false);
        });}
      
  }, [searchValue]);

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage(''); // Clear the textarea after sending
      console.log(currentMessage);
      fetch(`${process.env.REACT_APP_BASE_URL}/chat/savemessage/${value}/${idconv}/${currentMessage}`)
      .then(response => {
        if (!response.ok) {
          console.log("hadchi ma5adamch save");
      
        }
        return response.json;
      }).then(data => {
        console.log("nchofo data:", data);
      }).catch(error => {
        console.log("had khedma na9essa");
      
      });
    }
  };
  
  return (
    <div className='chat-container'>
      <div className='chat-sidebar'>
        <div className='search'>
          <input type='text' placeholder='Search' value={searchValue}  onChange={handleInputChange} />
          <i className='fa fa-search' />
        </div>
        <div className='friend-list'>
          
  {
  list.map((item, index) => (
    click?
    (<div key={index} className='friend' >
      <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='Friend' />
      <div className='friend-details' onClick={()=>{setName(item.firstName+' '+item.lastName);setIdconv(item.Id);setMessages([])}}>
        <span className='friend-name'>{item.firstName} {item.lastName}</span>&nbsp;&nbsp;
        <span className='last-active-time'>{item.Id}</span>
      </div>
    </div>):null
  ))
}

            
          {/* Add more friends here */}
        </div>
      </div>
      <div className='chat-content'>
        <div className='chat-header'>
          <img src='https://bootdey.com/img/Content/avatar/avatar6.png' alt='Header Avatar' />
          <div className='header-details'>
            <span className='header-name'>{name}</span>&nbsp;&nbsp;
            <span className='header-status'>Online</span>
          </div>
        </div>
        {(() => {
                if (value==4) {
                    return <p>Bonjour, utilisateur!</p>;
                } else {
                    return <p>Veuillez vous connecter.</p>;
                }
            })()}
        {/* Previous Messages */}
        <div className='previous-messages'>
            <a >Show Previous Message!</a>
          </div><br/>
          <div className='message-list'>
        {messages.map((message, index) => (
          <div key={index} className='message-body'>
            <div className='message-sender'>
              <div className='message-text'>{message}</div>
              <span className='message-time'>Sun</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className='message-input'>
        <i className='fa fa-smile-o fa-2x' />
        <textarea
          className='message-textarea'
          rows={1}
          value={currentMessage}
          onChange={e => setCurrentMessage(e.target.value)}
        />
        <i className='fa fa-microphone fa-2x' aria-hidden='true' />
        <i className='fa fa-send fa-2x' aria-hidden='true' onClick={handleSend} />
      </div>
      </div>
    </div>
  );
}

const previousMessage = (messageId) => {
  // Handle showing previous messages here
}

export default ChatMessage;
