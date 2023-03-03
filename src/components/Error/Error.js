import "./Error.css";
import { NavLink } from "react-router-dom";

export default function Error() {

  return (
    <section className="error-container">
      <div className="error">
        <NavLink to="/">
          <button className="error-button">Go Back Home</button>
        </NavLink>

      </div>
      <h2 className="error-message">Sorry, page not found.</h2>
    </section>
  )
}