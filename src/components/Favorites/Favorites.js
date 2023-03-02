import React from "react";
import { Link } from "react-router-dom";
import Works from "../Works/Works";
import "./Favorites.css";

export function Favorites({ workData }) {

  return (
    <div>
      <div className="button-container-faves">
        <Link to="/">
          <button className="back-button-faves">Back Home</button>
        </Link>
      </div>
      <Works vanGoghWorks={workData} />
    </div>
  )
}