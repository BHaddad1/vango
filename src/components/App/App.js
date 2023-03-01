import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { fetchVanGoghData } from "../../APICalls/apiCalls";
import "./App.css";
import icon from "../../assets/logo.jpg";
import Form from "../Form/Form";
import Works from "../Works/Works";
import CardDetails from "../CardDetails/CardDetails";
import loadingGif from "../../assets/loadingGif.webp";
import { Favorites } from "../Favorites/Favorites";

function App() {
  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [favoritedWorks, setFavoritedWorks] = useState([]);

  const getVanGoghWorks = () => {
    fetchVanGoghData()
      .then((data) => {
        data.map(work => {
          work.isFavorited = false;
          return work;
        })
        setVanGoghData(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getVanGoghWorks();
  }, []);
  console.log(vanGoghData);

  const updateFavorite = (id) => {
    const foundWork = vanGoghData.map(work => {
      if (work.objectID === id) {
       return {...work, isFavorited: !work.isFavorited}
      } return work;
    });
    const favorite = foundWork.find(work => work.objectID === id)
    console.log("favoritedWork", favorite);
    setFavoritedWorks([...favoritedWorks, favorite]);
  }

  return (
    <div>
      <div className="header-container">
        <img src={icon} alt="Van Gogh Sunflowers" className="logo" />
        <h1 className="header">VanGo</h1>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
      <Switch>
        <Route exact path="/" render={() => (
          <Fragment>
            <Form />
            {loading && <img src={loadingGif} alt="loading gif"/>}
            {loading && <p className="loading-message">Loading, please hold.</p>}
            <Works vanGoghWorks={vanGoghData} />
          </Fragment>
          )}
        />
        <Route exact path="/favorites" render={() => <Favorites workData={favoritedWorks}/> }/>
        <Route exact path="/:workId" render={({ match }) => {
          const foundWork = vanGoghData.find(work => work.objectID === +match.params.workId)
            return <CardDetails workID={match.params.workId} workData={foundWork} updateFavorite={updateFavorite} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
