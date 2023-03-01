import React from "react";

export default function CardDetails({ workData }) {

  console.log(workData);
  return (
    <div>
      <img src={workData.primaryImage} alt={workData.title} className="primary-img"/>
      <h2 className="title-details">Title: {workData.title} by {workData.artistDisplayName}</h2>
      <p className="work-details">Gallery Number: {workData.GalleryNumber}</p>
      <p className="work-details">Accession Year: {workData.accessionYear}</p>
      <p className="work-details">Dimensions: {workData.dimensions}</p>
      <p className="work-details">Medium: {workData.medium}</p>
      <p className="work-details">Department: {workData.department}</p>
      <p className="work-details">More information: {workData.objectURL}</p>
      <p className="work-details">{workData.objectWikiData_URL && `More information: ${workData.objectWikiData_URL}`}</p>
    </div>
  )
}