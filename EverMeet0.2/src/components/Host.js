// Host.js
import React, { useState } from "react";
import "./Host.css";

function Host() {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any actions you want with the submitted data
    console.log("Meeting Title:", meetingTitle);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Date:", date);
  };

  return (
    <div className="host-container">
        <h2 className="soukaina">Host a Meeting</h2>
        <h1></h1>
        <h1></h1>
      <form className="host-form" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <label>Meeting Title:</label>
          <input
            type="text"
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Meeting</button>
      </form>
    </div>
  );
}

export default Host;
