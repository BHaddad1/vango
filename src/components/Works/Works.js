import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export default function Works({ vanGoghWorks }) {

const mappedVanGoghWorks = vanGoghWorks.map(work => {
  return (
    <div key={work.objectID}>
      <Link>
        <Card 
          id={work.objectID}
          image={work.primaryImage}
          title={work.title}
        />
      </Link>
    </div>
    )
  })

  return (
    <div className="card-container">
     {mappedVanGoghWorks}
    </div>
  )
}