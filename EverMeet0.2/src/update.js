// Host.js
import React, { useState,useEffect } from "react";
import "./components/Host.css";

function Verify(props) {
  const value=localStorage.getItem('idb');
  console.log("update:"+value);
 const [formData, setFormData] = useState({
    date:'',
    });
    useEffect(() => {
        // URL of the API you want to fetch
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/getMeet/`+props.userid;
    
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
          })
          .then((data) => {
            const date = data.startTime.split('T')[0];
            const startTime = data.startTime.split('T')[1];
            const endTime = data.endTime.split('T')[1];
            
            setFormData(prevData => ({
                ...prevData,
                id:data.id,
                title:data.title,
                date: date,
                startTime: startTime,
                endTime: endTime,
            }));
        })
          .catch((error) => {
            console.log(error);
          });
      },[]);

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
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/update/`+value, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
      });
       console.log("update nooooow:"+response);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);


    // Alert the user
    alert('Meeting data submitted successfully!');
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
  }
  };
  useEffect(() => {
    console.log(formData);
}, [formData]);
  return (
    <div className="host-container">
        <h2 className="H2HO">update&nbsp;a&nbsp;Meeting</h2>
       
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
        
        <button className="buttonH" type="submit">Update</button>
      </form>
    </div>
  );
}

export default Verify;
