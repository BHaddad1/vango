import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchVanGoghData } from "../../../APICalls/apiCalls";
import "./App.css";
import icon from "../../../assets/logo.jpg"
import Form from "../../Form/Form";

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
      <div className="header-container">
        <img src={icon} alt="Van Gogh Sunflowers" className="logo"/>
        <h1 className="header">VanGo</h1>
      </div>
      <Route exact path="/vanGo/" render={() => <Works vanGoghWorks={vanGoghData}/>} />
      <Route exact path="/vanGo/" render={() => <Form />} />
    </div>
  );
}

export default App;
