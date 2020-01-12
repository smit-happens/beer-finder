import React from "react";
import BreweryList from "./BreweryList";
import MapPortal from "./MapPortal";
import { BreweryApi } from "../models/BreweryApi";
import Brewery from "../models/Brewery";

interface State {
    breweries: Array<Brewery>;
}

export default class Home extends React.Component<null, State> {

    constructor(props: any) {
        super(props);
        this.state = { breweries: [] };
    }

    public async componentDidMount(): Promise<void> {
        const breweries = await BreweryApi.index();
        this.setState({ breweries: breweries });
    }

    public render(): JSX.Element {
        return (
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-4">
              <BreweryList breweries={this.state.breweries} />
            </div>
            <div className="col col-md-8">
              <MapPortal breweries={this.state.breweries}/>
            </div>
          </div>
        </div>
        );
    }
}