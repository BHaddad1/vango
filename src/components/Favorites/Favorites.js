import { Link } from "react-router-dom";
import Works from "../Works/Works";
import PropTypes from "prop-types";
import "./Favorites.css";

export function Favorites({ workData }) {

  return (
    <div>
      <div className="button-container-faves">
        <Link to="/">
          <button className="back-button-faves grow">Back Home</button>
        </Link>
        <Link to="/about">
          <div>
            <button className="back-button-faves grow">About Me</button>
          </div>
        </Link>
      </div>
      <Works vanGoghWorks={workData} />
    </div>
  )
}

Favorites.propTypes = {
  workData: PropTypes.array.isRequired,
}