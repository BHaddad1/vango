import { Link } from "react-router-dom";
import "./About.css";

export function About() {
  return (
    <div className="about-container">
      <div className="button-container"> 
        <Link to="/favorites">
          <button className="button grow">Favorites</button>
        </Link>
        <Link to="/">
          <button className="button grow">Back Home</button>
        </Link>
      </div>
      <h2 className="name">Blanche Haddad they/them</h2>
      <Link
        to={{
          pathname: "https://www.linkedin.com/in/blanche-haddad-denver/",
        }}
        target="_blank"
      >
        <button className="link grow">LinkedIn</button>
      </Link>
      <Link
        to={{
          pathname: "https://github.com/BHaddad1",
        }}
        target="_blank"
      >
        <button className="link grow">GitHub</button>
      </Link>
    </div>
  )
}