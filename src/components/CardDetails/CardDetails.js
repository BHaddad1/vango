import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CardDetails({ workData, updateFavorite }) {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    updateFavorite(workData.objectID, isChecked)
  }

  return (
    <div>
      <div className="button-container">
        <Link to="/">
          <button className="back-button">Back Home</button>
        </Link>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="favorite"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Favorite this work
        </label>
      </div>
      <img src={workData.primaryImage} alt={workData.title} className="primary-img"/>
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
  )
}