import React from "react";
import './Meet.css'
import '../App.css';
import { useState } from "react";

function Meet(){
    const [cards] = useState(
        [
            {
                title: "Meeting Name",
                start:"00:00 AM",
                end: "00:00 PM",
                id: "Meeting ID",
                MHost: "Meeting Host"
            },
            {
                title: "Meeting Name",
                start:"00:00 AM",
                end: "00:00 PM",
                id: "Meeting ID",
                MHost: "Meeting Host"
            },
            {
                title: "Meeting Name",
                start:"00:00 AM",
                end: "00:00 PM",
                id: "Meeting ID",
                MHost: "Meeting Host"
            },
            {
                title: "Meeting Name",
                start:"00:00 AM",
                end: "00:00 PM",
                id: "Meeting ID",
                MHost: "Meeting Host                                 "
            }
        ]
    );

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
                            <p> Start time: {card.start}</p>
                            <p>End time: {card.end}</p>
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