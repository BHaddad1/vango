import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Form.css";

export default function Form({ filterWorks }) {

  const [workTitle, setWorkTitle] = useState("");

  useEffect(() => {
    filterWorks(workTitle);
  }, [workTitle])

  return (
    <form className="form-container">
       <Link to="/favorites">
        <div className="favorites-button-container grow">
          <button className="favorites-button">Favorites</button>
        </div>
      </Link>
      <div className="search-container"> 
      <label>
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
      </label>
        <button 
        className="clear-button grow"
        onClick={(event) => {
          event.preventDefault();
          setWorkTitle("");
        }}
        >Clear</button>
      </div>
      <Link to="/about">
        <div className="favorites-button-container grow">
          <button className="favorites-button">About Me</button>
        </div>
      </Link>
    </form>
  )
}

Form.propTypes = {
  filterWorks: PropTypes.func.isRequired
}