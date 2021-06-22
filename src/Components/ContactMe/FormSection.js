import React from 'react';

export const FormSection = (props) => {
  return(
    <div className="form-section">
      <form>
        <div className="first-name-div">
          <input type="text" placeholder="First Name"></input>
        </div>
        <div className="email-div">
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="textarea-div">
          <textarea placeholder="Enter your message here..." maxLength="200"></textarea>
        </div>
        <div className="submit-div">
          <button className="submit-button" type="submit">submit</button>
        </div>
      </form>
    </div>
  )
};