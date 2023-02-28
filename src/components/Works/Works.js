import React from "react";
import { Card } from "../Card/Card";

export default function Works({ vanGoghWorks }) {

const mappedVanGoghWorks = vanGoghWorks.map(work => {
  return (
    <div key={work.objectID}>
      <Card 
        id={work.objectID}
        image={work.primaryImage}
        title={work.title}
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