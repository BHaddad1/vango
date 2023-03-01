import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchVanGoghData } from "../../APICalls/apiCalls";
import "./App.css";
import icon from "../../assets/logo.jpg";
import Form from "../Form/Form";
import Works from "../Works/Works";
import CardDetails from "../CardDetails/CardDetails";
import loadingGif from "../../assets/loadingGif.webp";

function App() {
  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getVanGoghWorks = () => {
    fetchVanGoghData()
      .then((data) => {
        setVanGoghData(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getVanGoghWorks();
  }, []);
  console.log(vanGoghData);

  return (
    <div>
      <div className="header-container">
        <img src={icon} alt="Van Gogh Sunflowers" className="logo" />
        <h1 className="header">VanGo</h1>
      </div>
      <Switch>
        <Route exact path="/" render={() => (
          <Fragment>
            <Form />
            {loading && <img src={loadingGif} alt="loading gif"/>}
            <Works vanGoghWorks={vanGoghData} />
          </Fragment>
          )}
        />
        <Route exact path="/:workId" render={({ match }) => {
          const foundWork = vanGoghData.find(work => work.objectID === +match.params.workId)
            return <CardDetails workID={match.params.workId} workData={foundWork} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
