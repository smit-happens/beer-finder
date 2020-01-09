import React from 'react';
import GoogleMap from 'google-map-react';

import BreweryList from './view/BreweryList';

class App extends React.Component {
  static defaultProps = {
    center: {
      lat: 39.945480,
      lng: -76.728690
    },
    zoom: 11
  };

  // constructor(props:any) {
  //   super(props);

  // }
  
  public render() {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col col-md-4">
            <BreweryList/>
          </div>
          <div className="col">
            <GoogleMap
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY! }}
              defaultCenter={App.defaultProps.center}
              defaultZoom={11}
            >
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
