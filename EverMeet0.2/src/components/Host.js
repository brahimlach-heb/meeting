// Host.js
import React, { useState,useEffect } from "react";
import "./Host.css";

function Host() {
  const value=localStorage.getItem('idb');
  console.log("Host:"+value);
 const [formData, setFormData] = useState({
  date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datetimeStart = `${formData.date}T${formData.startTime}`;
    const datetimeEnd = `${formData.date}T${formData.endTime}`;
    
    // Destructure formData to get fields other than 'date'
    const { date, ...dataWithoutDate } = formData;

    const dataToSend = {
        ...dataWithoutDate,
        startTime: datetimeStart,
        endTime: datetimeEnd
    };
    console.log(dataToSend)
    // Here you can perform any actions you want with the submitted data
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/save/`+value, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      else{
        setFormData({
          date: '',
          startTime: '',
          endTime: '',
          title: '',
      });
  
      // Alert the user
      alert('Meeting data submitted successfully!');
      }

      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
  }
  };
  useEffect(() => {
    console.log(formData);
}, [formData]);
  return (
    <div className="host-container">
        <h2 className="H2HO">Host&nbsp;a&nbsp;Meeting</h2>
        <h1></h1>
        <h1></h1>
      <form className="host-form" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <label>Meeting Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <button className="buttonH" type="submit">Create Meeting</button>
      </form>
    </div>
  );
}

export default Host;
