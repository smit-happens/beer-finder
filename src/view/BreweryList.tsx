import React from 'react';
import BreweryListItem from "./BreweryListItem";
import Brewery from '../models/Brewery';


class State {
    breweries: Array<Brewery>

    constructor(breweries: Array<Brewery> = []) {
        this.breweries = breweries;
    }
}

interface Props {}

export default class BreweryList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = new State();
    }

    render() {
        let listItems = this.state.breweries.map(
            brewery => (
                <BreweryListItem 
                    brewery = {brewery} 
                    key = {brewery.id}
                />
            )
        );

        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-action active">Cras justo odio</li>
                <li className="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
                <li className="list-group-item list-group-item-action">Morbi leo risus</li>
                <li className="list-group-item list-group-item-action">Porta ac consectetur ac</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
            </ul>
        )
    }
}