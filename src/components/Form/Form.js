import React, { useState } from "react";

export default function Form() {
  const [workTitle, setWorkTitle] = useState("");

  return (
    <form>
      <input 
        type="text"
        placeholder="Search for a Van Gogh by title"
        value={workTitle}
        onChange={event => setWorkTitle(event.target.value)}
      />  
      <button onClick={() => setWorkTitle("")}>Clear</button>
    </form>
  )
}