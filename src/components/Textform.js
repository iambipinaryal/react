import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); // Initialize text as an empty string

  const handleUpClick = () => {
    let newText = text.toUpperCase(); // Convert text to uppercase
    setText(newText); // Update the state with uppercase text
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update text state as user types
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {props.heading}
      </label>
      <textarea
        className="form-control"
        value={text} 
        id="exampleFormControlTextarea1"
        onChange={handleOnChange} 
        rows="8"
      ></textarea>
      <div className="mb-3"></div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
