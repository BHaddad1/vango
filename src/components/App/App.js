import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchVanGoghData } from "../../APICalls/apiCalls";
import './App.css';

function App() {

  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const getVanGoghWorks = () => {
    setLoading(true);
    fetchVanGoghData()
      .then(data => setVanGoghData(data))
      .catch(err => setError(err));
  }

  useEffect(() => {
    getVanGoghWorks()
  }, [])

  return (
    <div>
    
    </div>
  );
}

export default App;
