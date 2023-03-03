import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";


export function Card({ id, image, title }) {

  return (
    <div className="card">
      <Link to={`/vanGo/${id}`}>
        <img src={image} alt="A Van Gogh work" className="card-image"/>
        <p className="card-title">{title}</p>
      </Link>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}