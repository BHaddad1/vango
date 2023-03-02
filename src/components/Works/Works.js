import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export default function Works({ vanGoghWorks, updateFavorite }) {

  const mappedVanGoghWorks = vanGoghWorks.filter(work => work.primaryImage).map(work => {
    return (
      <div key={work.objectID}>
          <Card 
            id={work.objectID}
            image={work.primaryImageSmall}
            title={work.title}
            updateFavorite={updateFavorite}
            workData={work}
          />
      </div>
      )
    })

  return (
    <div className="card-container">
     {mappedVanGoghWorks}
    </div>
  )
}