import React, { useState, useEffect } from "react";
import {
  fetchVanGoghData,
  fetchIndividualWork,
} from "../../../APICalls/apiCalls";
import "./App.css";

function App() {
  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getVanGoghWorks = () => {
    setLoading(true);
    fetchVanGoghData()
      .then((data) => setVanGoghData(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getVanGoghWorks();
  }, []);

  return (
    <div>
      <Switch></Switch>
    </div>
  );
}

export default App;
