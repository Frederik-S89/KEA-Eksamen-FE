import React, { useState, useEffect } from "react";
import "./Bekræftelse.css";

function Bekræftelse() {

<div className="Baggrund">

C:\Users\Frederik\hubspot-app\src\HubSpot\HubSpot.js
    
</div>

const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    console.log(message);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <h2>Updated: {updated}</h2>
      
      <button onClick={handleClick}>Update</button>
    </div>
  );


}

export default Bekræftelse;




  