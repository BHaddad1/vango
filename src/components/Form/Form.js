import React, { useState, useEffect } from "react";
import "./Form.css";

export default function Form({ filterWorks }) {

  const [workTitle, setWorkTitle] = useState("");

  useEffect(() => {
    filterWorks(workTitle);
  }, [workTitle])

  return (
    <form className="form-container">
      <input 
        type="text"
        name="workTitle"
        className="input"
        placeholder="Search for a Van Gogh by title"
        value={workTitle}
        onChange={event => {
          setWorkTitle(event.target.value);
        }}
      />  
      <button 
      className="form-button"
      onClick={(event) => {
        event.preventDefault();
        setWorkTitle("");
      }}
      >Clear</button>
    </form>
  )
}