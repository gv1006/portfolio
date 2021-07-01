import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const FormSection = (props) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onInputChange = (event, setState) => {
    if(!event.isTrusted) {
      return;
    }
    const value = event.target.value;
    setState(value);
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  }

 return(
    <div className="form-section">
      <form autoComplete="off">
        <div className="first-name-div">
          <input
            type="text" 
            placeholder="First Name" 
            required 
            value={firstName} 
            onChange={(event) => onInputChange(event, setFirstName)} 
            name="fname"
            ></input>
        </div>
        <div className="email-div">
          <input
            type="email" 
            placeholder="Email" 
            required value={email} 
            onChange={(event) => 
            onInputChange(event, setEmail)} 
            name="email"></input>
        </div>
        <div className="textarea-div">
          <textarea
            placeholder="Enter your message here..."
            maxLength="200" 
            value={message} 
            onChange={(event) => onInputChange(event, setMessage)} 
            name="message"></textarea>
        </div>
        <div className="submit-div">
          <button className="submit-button" type="submit" onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  )
};