import React from 'react';

import MapPortal from "./view/MapPortal";
import BreweryList from './view/BreweryList';

import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component { 
  public render() {
    return (
      <div>
        <div className="container p-3">
          <div className="row">
            <div className="col col-md-4">
              <BreweryList/>
            </div>
            <div className="col">
              <MapPortal/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
