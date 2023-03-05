import { useState, useEffect, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { fetchVanGoghData } from "../../APICalls/apiCalls";
import icon from "../../assets/logo.jpg";
import Form from "../Form/Form";
import Works from "../Works/Works";
import CardDetails from "../CardDetails/CardDetails";
import loadingGif from "../../assets/loadingGif.webp";
import { Favorites } from "../Favorites/Favorites";
import Error from "../Error/Error";
import { About } from "../About/About";
import "./App.css";

function App() {
  const [vanGoghData, setVanGoghData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [favoritedWorks, setFavoritedWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);

  const getVanGoghWorks = () => {
    fetchVanGoghData()
      .then((data) => {
        setVanGoghData(data);
        setFilteredWorks(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }

  useEffect(() => {
    getVanGoghWorks();
  }, [])

  const updateFavorite = (id, isChecked) => {
    vanGoghData.map((work) => {
      if (work.objectID === id) {
        work.isFavorited = !isChecked;
        return { ...work };
      }
      return work;
    })
    const favorites = vanGoghData.filter((work) => work.isFavorited)
    setFavoritedWorks(favorites);
  }

  const filterWorks = (title) => {
    const filteredWorks = vanGoghData.filter(work => work.title.toLowerCase().includes(title.toLowerCase()));
    setFilteredWorks(filteredWorks);
  }

  return (
    <div>
      <div className="header-container">
        <Link to="/"> 
          <img src={icon} alt="Van Gogh Sunflowers" className="logo" />
        </Link>
        <h1 className="header">VanGo</h1>
      </div>
      <Switch>
        <Route exact path="/" render={() => (
          <Fragment>
            <Form filterWorks={filterWorks} />
            {loading && <img src={loadingGif} alt="Loading Gif" className="loading"/>}
            {loading && <p className="loading">Loading, please hold.</p>}
            {error && <p className="loading">Sorry, something went wrong. Please try again later.</p>}
            <Works vanGoghWorks={filteredWorks} updateFavorite={updateFavorite} />
          </Fragment>
          )}
        />
        <Route exact path="/favorites" render={() => <Favorites workData={favoritedWorks}/> }/>
        <Route exact path="/vanGo/:workId" render={({ match }) => {
          const foundWork = vanGoghData.find(work => work.objectID === +match.params.workId)
            return <CardDetails workID={match.params.workId} workData={foundWork} updateFavorite={updateFavorite} />;
          }}
        />
        <Route path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
