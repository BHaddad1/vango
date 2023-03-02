import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";


export function Card({ id, image, title, updateFavorite }) {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    updateFavorite(id, isChecked)
  }

  return (
    <div className="card">
       {!isChecked && <div className="favorite">
        <label>
          <input
            type="checkbox"
            name="favorite"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Add to Favorites
        </label>
      </div>}
      {isChecked && <div className="favorite">
        <label>
          <input
            type="checkbox"
            name="favorite"
            checked={isChecked}
            onChange={handleOnChange}
            className="favorite"
          />
          Remove from Favorites
        </label>
      </div>}
      <Link to={`/${id}`}>
        <img src={image} alt="A Van Gogh work" className="card-image"/>
        <p className="card-title">{title}</p>
      </Link>
    </div>
  )
}