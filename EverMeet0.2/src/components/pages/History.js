import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../Meet.css';
import Navbar from '../Navbar';
import moment from 'moment';

function History(){
  const value=localStorage.getItem('idb');
  console.log("Host:"+value);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // Fetch data from the API using fetch
    fetch(`${process.env.REACT_APP_BASE_URL}/GetAll/`+value)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Update the cards state with fetched data
        setCards(data);
      })
      .catch(error => {
        console.error("Error fetching meetings:", error);
      });
  }, []);

    return(
        <>
        <Navbar/>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <h1 className='h1M'>Previous&nbsp;Meetings</h1>
                    <div className="cards">
                        {
                            cards.map((card, i)=>(
                        <div key= {i} className="card">
                            <h3 className="h3M">Title: {card.title}</h3>
                            <p className="pM">Start time: {moment(card.startTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p className="pM">End time: {moment(card.endTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p className="pM">Meeting ID: {card.id}</p>
                            
                        </div>
                        ))
                        }
                    </div>
             
      </div>
      <Footer />
        </>
    );
}

export default History;