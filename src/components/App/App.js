import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchVanGoghData } from "../../APICalls/apiCalls";
import "./App.css";
import icon from "../../assets/logo.jpg";
import Form from "../Form/Form";
import Works from "../Works/Works";
import CardDetails from "../CardDetails/CardDetails";

function App() {
  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getVanGoghWorks = () => {
    fetchVanGoghData()
      .then((data) => setVanGoghData(data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    setLoading(true);
    getVanGoghWorks();
    setLoading(false);
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
