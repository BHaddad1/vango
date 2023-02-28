import React, { useState } from "react";

export function Form() {
  const [workTitle, setWorkTitle] = useState("");

  return (
    <form>
      <input 
        type="text"
        placeholder="Search for a Van Gogh work by title..."
        name="workTitle"
        value={workTitle}
        onChange={event => setWorkTitle(event.target.value)}
      />
      <button onClick={setWorkTitle("")}>Clear</button>     
    </form>
  )
}