import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardDetails.css";

export default function CardDetails({ workData, updateFavorite }) {

  const [isChecked, setIsChecked] = useState(workData.isFavorited);

  console.log(workData);

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    updateFavorite(workData.objectID, isChecked)
  }

  return (
    <div className="details">
      <div className="button-container-details"> 
        <Link to="/">
          <button className="back-button grow">Back Home</button>
        </Link>
        <Link to="/favorites">
          <button className="back-button grow">Favorites</button>
        </Link>
        <Link to="/about">
        <div className="favorites-button-container grow">
          <button className="favorites-button">About Me</button>
        </div>
      </Link>
      </div>
      <div className="details-container">
        {!workData.isFavorited && <div>
          <label className="favorite-details">
            <input
              type="checkbox"
              name="favorite"
              checked={isChecked}
              onChange={handleOnChange}
              className="favorite-details"
            />
            Add to Favorites
          </label>
        </div>}
        {workData.isFavorited && <div>
          <label className="favorite-details">
            <input
              type="checkbox"
              name="favorite"
              checked={isChecked}
              onChange={handleOnChange}
            />
            Remove from Favorites
          </label>
        </div>}
        <img src={workData.primaryImageSmall} alt={workData.title} className="primary-img grow"/>
        <h2 className="title-details">{workData.title} by {workData.artistDisplayName}</h2>
        <p className="work-details">Gallery Number: {workData.GalleryNumber}</p>
        <p className="work-details">Accession Year: {workData.accessionYear}</p>
        <p className="work-details">Dimensions: {workData.dimensions}</p>
        <p className="work-details">Medium: {workData.medium}</p>
        <p className="work-details">Department: {workData.department}</p>
        <p className="work-details">Credit Line: {workData.creditLine}</p>
        <p className="work-details">More information: {workData.objectURL}</p>
        <Link
        to={{
          pathname: `${workData.objectWikidata_URL}`,
        }}
        target="_blank"
      >
        <p className="work-details">More information: {workData.objectWikidata_URL}</p>
      </Link>
      </div>
    </div>
  )
}

CardDetails.propTypes = {
  workData: PropTypes.object.isRequired,
  updateFavorite: PropTypes.func.isRequired
}