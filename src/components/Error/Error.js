import "./Error.css";
import { Link } from "react-router-dom";

export default function Error() {

  return (
    <section className="error-container">
      <div className="error">
        <Link to="/">
          <button className="error-button">Go Back Home</button>
        </Link>
      </div>
      <h2 className="error-message">Sorry, page not found.</h2>
    </section>
  )
}