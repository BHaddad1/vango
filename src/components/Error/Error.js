import "./Error.css";
import { Link } from "react-router-dom";

export default function Error() {

  return (
    <section className="error-container">
      <h2>Sorry, page not found.</h2>
      <Link to="/">
        <button className="error-button">Go Back Home</button>
      </Link>
    </section>
  )
}