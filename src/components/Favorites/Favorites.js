import React from "react";
import { Link } from "react-router-dom";
import Works from "../Works/Works";

export function Favorites({ workData }) {
  console.log(workData);
  return (
    <div>
      <div className="button-container">
        <Link to="/">
          <button className="back-button">Back Home</button>
        </Link>
      </div>
      <Works vanGoghWorks={workData} />
    </div>
  )
}