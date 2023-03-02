import React, { useState, useEffect } from "react";

export default function Form({ filterWorks }) {

  const [workTitle, setWorkTitle] = useState("");

  useEffect(() => {
    filterWorks(workTitle);
  }, [workTitle])

  return (
    <form>
      <input 
        type="text"
        placeholder="Search for a Van Gogh by title"
        value={workTitle}
        onChange={event => {
          setWorkTitle(event.target.value);
          // filterWorks(event.target.value);
        }}
      />  
      <button onClick={(event) => {
        event.preventDefault();
        setWorkTitle("");
        // filterWorks("");
      }}
      >Clear</button>
    </form>
  )
}