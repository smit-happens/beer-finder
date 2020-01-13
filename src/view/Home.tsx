import React from "react";
import BreweryList from "./BreweryList";
import MapPortal from "./MapPortal";
import { BreweryApi } from "../models/BreweryApi";
import Brewery from "../models/Brewery";
import SearchBar from "./SearchBar";

interface State {
    breweries: Array<Brewery>;
    search: string;
}

export default class Home extends React.Component<null, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            breweries: [],
            search: "",
        };
        this._onSearchChanged = this._onSearchChanged.bind(this);
    }

    //only happens when component mounts (once)
    public async componentDidMount(): Promise<void> {
        const breweries = await BreweryApi.index();
        this.setState({ breweries: breweries });
    };

    public async componentDidUpdate(prevProps: null, prevState: State): Promise<void> {
        if (this.state.search !== prevState.search) {
            this.setState({ breweries: await BreweryApi.index(this.state.search) });
        }
        
    }

    public render(): JSX.Element {
        return (
            <div className="container-fluid">
                <SearchBar searchText={this.state.search} onSearchTextChanged={this._onSearchChanged}/>
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


    private _onSearchChanged(value: string): void {
        this.setState({ search: value });
    }
}