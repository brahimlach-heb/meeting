 import React from "react";
import './Meet.css'
import '../App.css';
import { useState,useEffect } from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from "axios";


function Meet(){
  const value=localStorage.getItem('idb');
  console.log("useridmeetings:"+value);
    const [cards, setCards] = useState([]);
    const openVideoCallInNewTab = (idmeet) => {
      console.log("hani ghadi n5edm");
        axios.get(`${process.env.REACT_APP_BASE_URL}/changecase/`+idmeet+`&`+value)
      .then(response => {
        console.log("haniiii:"+response.data);
      })
      .catch(error => {
        console.error("There was an error fetching data", error);
      });
      window.open('http://localhost:8080/', '_blank');
        };
    useEffect(() => {
      // Fetch data from the API using fetch
      fetch(`${process.env.REACT_APP_BASE_URL}/getmeetings/`+value)
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
      fetch(`${process.env.REACT_APP_BASE_URL}/delete/${id}`, {
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
            <section className="sectionM">
                <div className="containeer">
                    <h1 className="h1M">Upcoming&nbsp;Meetings</h1>
                    <button className="jbyd" onClick={()=>window.location.href='http://localhost:8080/join'}>Join By ID</button>
                    <div className="cards">
                        {
                            cards.map((card, i)=>(
                        <div key= {i} className="card">
                            <h3 className="h3M">Title: {card.title}</h3>
                            <p className="pM">Start time: {moment(card.startTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p className="pM">End time: {moment(card.endTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p className="pM">Meeting ID: {card.id}</p>
                            <div className="buttons">
                                <Link onClick={()=>openVideoCallInNewTab(card.id)} className="butnn">Start</Link>
                                <Link to={`/Update/${card.id}`} className="butnn">Edit</Link>
                                <Link className="butnn" onClick={() => handleDelete(card.id)}>Delete</Link>
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