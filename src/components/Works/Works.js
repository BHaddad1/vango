import { Card } from "../Card/Card";
import PropTypes from "prop-types";
import "./Works.css";

export default function Works({ vanGoghWorks }) {

  const mappedVanGoghWorks = vanGoghWorks.filter(work => work.primaryImage).map(work => {
    return (
      <div className="ind-card-container" key={work.objectID}>
          <Card 
            id={work.objectID}
            image={work.primaryImageSmall}
            title={work.title}
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

Works.propTypes = {
  vanGoghWorks: PropTypes.array.isRequired
}