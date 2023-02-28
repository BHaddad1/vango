import React from "react";

export function Card({ id, image, title }) {

  return (
    <div className="card">
      <img src={image} alt="A Van Gogh work" className="card-image"/>
      <p className="card-title">{title}</p>
    </div>
  )
}