import React, { useState } from 'react';

export const FormSection = (props) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const _validateInput = (name, value) => {
    switch(name) {
      case "fname":
        setFirstNameValid(value.length > 0);
        break;
      case "message":
        setMessageValid(value.length > 0);
        break;
      case "email":
        setEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        break;
      default:
        break;
    }
    setFormValid(firstNameValid && emailValid && messageValid);
  }
  const onInputChange = (event, setState) => {
    if(!event.isTrusted) {
      return;
    }
    const name = event.target.name;
    const value = event.target.value;
    setState(value, _validateInput(name, value));
  }
  const firstNameInputClass = ['first-name-div'];
  if(firstName.length > 0 && !firstNameValid) {
    firstNameInputClass.push('error');
  }
  const emailInputClass = ['email-div'];
  if(email.length > 0 && !emailValid) {
    emailInputClass.push('error');
  }
  const messageClass = ['textarea-div'];
  if(message.length > 0 && !messageValid) {
    messageClass.push('error');
  }
  return(
    <div className="form-section">
      <form>
        <div className={firstNameInputClass.join(' ')}>
          <input
            type="text" 
            placeholder="First Name" 
            required 
            value={firstName} 
            onChange={(event) => onInputChange(event, setFirstName)} 
            name="fname"
            ></input>
        </div>
        <div className={emailInputClass.join(' ')}>
          <input
            type="email" 
            placeholder="Email" 
            required value={email} 
            onChange={(event) => 
            onInputChange(event, setEmail)} 
            name="email"></input>
        </div>
        <div className={messageClass.join(' ')}>
          <textarea
            placeholder="Enter your message here..."
            maxLength="200" 
            value={message} 
            onChange={(event) => onInputChange(event, setMessage)} 
            name="message"></textarea>
        </div>
        <div className="submit-div">
          <button className="submit-button" type="submit" disabled={!formValid}>submit</button>
        </div>
      </form>
    </div>
  )
};