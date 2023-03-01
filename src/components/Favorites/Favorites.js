import React from "react";
import Works from "../Works/Works";

export function Favorites({ workData }) {
  console.log(workData);
  return (
    <div>
      <Works vanGoghWorks={workData} />
    </div>
  )
}