import React from "react";
import { useState } from "react";
export default function Form(props) {
  const [text, setText] = useState("Enter your text");
  const handleOnCHange = (event) => {
    setText(event.target.value);
  };
  function handleToUpperCase() {
    console.log("handleUpper");
    setText(text.toUpperCase());
  }
  function handleToLowerCase() {
    setText(text.toLowerCase());
  }
  function handleClear() {
    setText("");
  }
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Text
        </label>
        <textarea
          type="text"
          className="form-control"
          id="mutext"
          value={text}
          onChange={handleOnCHange}
          rows="8"
          aria-describedby="emailHelp"
        />
      </div>
      <button
        type="submit"
        onClick={handleToUpperCase}
        className="btn btn-primary mx-1"
      >
        ConvertToUpperCase
      </button>
      <button
        type="submit"
        onClick={handleToLowerCase}
        className="btn btn-primary mx-1"
      >
        ConvertToLowerCase
      </button>
      <button type="submit" onClick={handleClear} className="btn btn-primary">
        Clear
      </button>
    </div>
  );
}
