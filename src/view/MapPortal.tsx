import React from 'react';
import "./MapPortal.scss";
import { Map, TileLayer } from "react-leaflet";
// import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"

//  {/* <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
// integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
// data-crossorigin=""></script> */}

export default class MapPortal extends React.Component {
    render() {
        let point = {
            center: {
                lat: 39.945480,
                lng: -76.728690
              },
              zoom: 11
        };

        return (
            <Map 
                maxZoom={10}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
            </Map>
        )
    }
}