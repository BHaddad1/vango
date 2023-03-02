import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";


export function Card({ id, image, title }) {

  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img src={image} alt="A Van Gogh work" className="card-image"/>
        <p className="card-title">{title}</p>
      </Link>
    </div>
  )
}