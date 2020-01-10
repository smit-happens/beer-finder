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
        let listItems = this.state.breweries.map(  //TODO: set brewery results to fill out the list items
            brewery => (
                <BreweryListItem 
                    brewery = {brewery} 
                    key = {brewery.id}
                />
            )
        );
        //TODO: add check for length zero

        return (

            <div className="container-fluid">
                {listItems}
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action active">Great Beer here</li>
                    <li className="list-group-item list-group-item-action">Beers R Us</li>
                    <li className="list-group-item list-group-item-action">Morbi leo risus</li>
                    <li className="list-group-item list-group-item-action">Porta ac consectetur ac</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                    <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
                </ul>
            </div>
        )
    }
}