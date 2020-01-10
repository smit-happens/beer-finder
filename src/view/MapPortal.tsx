import React from 'react';
import "./MapPortal.scss";
import { Map, TileLayer } from "react-leaflet";

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
                center={point.center}
                zoom={point.zoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
            </Map>
        )
    }
}