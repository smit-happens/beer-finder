import React from 'react';
import "./MapPortal.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Brewery from "../models/Brewery";
import { RouteComponentProps, withRouter } from 'react-router';


interface UrlParams {
    id: string;
}

interface Props extends RouteComponentProps<UrlParams> {
    breweries: Array<Brewery>
}

class MapPortalComponent extends React.Component<Props> {
    private _leafletMarker: Marker | null = null;

    constructor(props: Props) {
        super(props);
        this._getActiveBrewery = this._getActiveBrewery.bind(this);
    }

    public componentDidUpdate(): void {
        if (this._leafletMarker != null) {
            this._leafletMarker.leafletElement.openPopup();
        }
    }

    public render(): JSX.Element {
        const brewery = this._getActiveBrewery();

        const point = {
            center: {
                lat: 39.945480,
                lng: -76.728690
              },
              zoom: 12
        };

        //check for no selection
        if(brewery != null) {
            point.center = {
                lat: Number(brewery.latitude),
                lng: Number(brewery.longitude)
            }
        }

        return (
            <Map 
                center={point.center}
                zoom={point.zoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={point.center} ref={(marker: Marker) => this._leafletMarker = marker}>
                    {
                        brewery &&
                        <Popup>
                            <div>{brewery.name}</div>
                            <div>{brewery.street} {brewery.city}</div>
                            <div>{brewery.state} {brewery.postal_code}</div>
                            {
                                brewery.website_url && brewery.website_url !== "" &&
                                <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
                            }
                        </Popup>
                    }
                </Marker>


            </Map>
        )
    }

    private _getActiveBrewery(): Brewery | undefined {
        const idString = this.props.match.params.id;    //checking URL prarms

        if (idString == null || idString === "") {
            if (this.props.breweries == null || this.props.breweries.length === 0) {
                return undefined;
            }

            return this.props.breweries[0]; //if none selected choose first one
        }

        const id = Number(idString);
        return this.props.breweries.find((b: Brewery) => b.id === id);
    }
}

const MapPortal = withRouter(MapPortalComponent);

export default MapPortal;