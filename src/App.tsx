import React from 'react';

import MapPortal from "./view/MapPortal";
import BreweryList from './view/BreweryList';

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from './Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component { 
  public render() {
    return (
      <div>
        <Router>
          <Route {...Routes.home}/>
          <Route {...Routes.brewery}/>
        </Router>
      </div>
    );
  }
}

export default App;
