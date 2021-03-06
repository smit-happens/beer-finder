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
    constructor(props: Props) {
        super(props);
        this.getActiveBrewery = this.getActiveBrewery.bind(this);
    }

    public componentDidUpdate(): void {
        if (this.leafletMarker != null) {
            this.leafletMarker.leafletElement.openPopup();
        }
    }

    public render(): JSX.Element {
        const brewery = this.getActiveBrewery();

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
                <Marker position={point.center} ref={(marker: Marker) => this.leafletMarker = marker}>
                    {
                        brewery &&
                        <Popup>
                            <div>{brewery.name}</div>
                            <div><span role="img" aria-label="telephone">☎️</span>: {brewery.phone}</div>
                            <div>{brewery.street} {brewery.city}</div>
                            <div>{brewery.state} {brewery.postal_code}</div>
                            {
                                brewery.website_url && brewery.website_url !== "" &&
                                <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
                            }
                            {
                                (brewery.latitude == null || brewery.latitude === "" || brewery.longitude == null || brewery.longitude === "") &&
                                <React.Fragment>
                                    <br/>
                                    <span className="no-map-available">Location Not Available</span>
                                </React.Fragment>
                            }
                        </Popup>
                    }
                </Marker>
            </Map>
        )
    }

    private leafletMarker: Marker | null = null;

    private getActiveBrewery(): Brewery | undefined {
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