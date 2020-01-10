import React from 'react';
// import GoogleMap from 'google-map-react';
import { Helmet } from "react-helmet";

import MapPortal from "./view/MapPortal";
import BreweryList from './view/BreweryList';

import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component { 
  public render() {
    return (
      <div>
        <Helmet>
          {/* <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            data-crossorigin=""></script>  */}
          <title>Turbo Team!</title>
        </Helmet>
        <div className="container p-3">
          <div className="row">
            <div className="col col-md-4">
              <BreweryList/>
            </div>
            <div className="col">
              {/* <GoogleMap
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY! }}
                defaultCenter={App.defaultProps.center}
                defaultZoom={11}
              >
              </GoogleMap> */}
              <MapPortal/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
