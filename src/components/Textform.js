import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); // Initialize text as an empty string

  const handleUpClick = () => {
    let newText = text.toUpperCase(); // Convert text to uppercase
    setText(newText); // Update the state with uppercase text
  };
  const handleloClick = () => {
    let newText = text.toLowerCase(); // Convert text to lowercase
    setText(newText); // Update the state with lowercase text
  };
  const handleReClick = () => {
    let newText = text.split('').reverse().join(''); // Convert text to reversecase
    setText(newText); // Update the state with reversecase text
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
      <div className="d-flex justify-content-start mt-3">
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReClick}>
          Convert to reverse
        </button>
        
      </div>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
  );
}
