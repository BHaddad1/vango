import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardDetails.css";

export default function CardDetails({ workData, updateFavorite }) {

  const [isChecked, setIsChecked] = useState(workData.isFavorited);

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    updateFavorite(workData.objectID, isChecked)
  }

  return (
<<<<<<< HEAD
    <div>
      <div className="button-container-single">
=======
    <div className="details">
      <div className="button-container-details"> 
>>>>>>> e66dcbb2464237281d9a082fde4625f1ab30f233
        <Link to="/">
          <button className="back-button-single">Back Home</button>
        </Link>
        <Link to="/favorites">
          <button className="back-button">Favorites</button>
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
        <img src={workData.primaryImageSmall} alt={workData.title} className="primary-img"/>
        <h2 className="title-details">{workData.title} by {workData.artistDisplayName}</h2>
        <p className="work-details">Gallery Number: {workData.GalleryNumber}</p>
        <p className="work-details">Accession Year: {workData.accessionYear}</p>
        <p className="work-details">Dimensions: {workData.dimensions}</p>
        <p className="work-details">Medium: {workData.medium}</p>
        <p className="work-details">Department: {workData.department}</p>
        <p className="work-details">Credit Line: {workData.creditLine}</p>
        <p className="work-details">More information: {workData.objectURL}</p>
        <p className="work-details">{workData.objectWikiData_URL && `More information: ${workData.objectWikiData_URL}`}</p>
      </div>
<<<<<<< HEAD
      <div className="details-container">
        {!isChecked && <div>
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
        {isChecked && <div>
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
        <img src={workData.primaryImageSmall} alt={workData.title} className="primary-img"/>
        <h2 className="title-details">{workData.title} by {workData.artistDisplayName}</h2>
        <p className="work-details">Gallery Number: {workData.GalleryNumber}</p>
        <p className="work-details">Accession Year: {workData.accessionYear}</p>
        <p className="work-details">Dimensions: {workData.dimensions}</p>
        <p className="work-details">Medium: {workData.medium}</p>
        <p className="work-details">Department: {workData.department}</p>
        <p className="work-details">Credit Line: {workData.creditLine}</p>
        <p className="work-details">More information: {workData.objectURL}</p>
        <p className="work-details">{workData.objectWikiData_URL && `More information: ${workData.objectWikiData_URL}`}</p>
      </div>
=======
>>>>>>> e66dcbb2464237281d9a082fde4625f1ab30f233
    </div>
  )
}

CardDetails.propTypes = {
  workData: PropTypes.object.isRequired,
  updateFavorite: PropTypes.func.isRequired
}