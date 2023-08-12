import React from "react";
import './Meet.css'
import '../App.css';
import { useState,useEffect } from "react";
import moment from 'moment';

function Meet(){
    const [cards, setCards] = useState([]);

    useEffect(() => {
      // Fetch data from the API using fetch
      fetch("http://localhost:7070/getmeetings")
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
        <div>
            <section>
                <div className="containeer">
                    <h1>Upcoming Meetings</h1>
                    <div className="cards">
                        {
                            cards.map((card, i)=>(
                        <div key= {i} className="card">
                            <h3>Meeting Name: {card.title}</h3>
                            <p> Start time: {moment(card.startTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>End time: {moment(card.endTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Meeting ID: {card.id}</p>
                            <p>Meeting Host: {card.MHost}</p>
                            <button className="butnn">Start</button>
                            <button className="butnn">Edit</button>
                            <button className="butnn">Delete</button>
                        </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Meet;