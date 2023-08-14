 import React from "react";
import './Meet.css'
import '../App.css';
import { useState,useEffect } from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';


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

    const handleDelete = (id) => {
      fetch(`http://localhost:7070/delete/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Remove the deleted meeting from the cards state
          setCards((prevCards) => prevCards.filter((card) => card.id !== id));
          console.log(cards);
        })
        .catch((error) => {
          console.error("Error deleting meeting:", error);
        });
      }

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
                            <div className="buttons">
                                <Link  className="butnn">Start</Link>
                                <Link to={`/Update/${card.id}`} className="butnn">Edit</Link>
                                <button className="butnn" onClick={() => handleDelete(card.id)}>Delete</button>
                            </div>
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