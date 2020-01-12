import React from 'react';
import BreweryListItem from "./BreweryListItem";
import Brewery from '../models/Brewery';
import { BreweryApi } from '../models/BreweryApi';


interface Props {
    breweries: Array<Brewery>
}

export default class BreweryList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        const listItems = this.props.breweries.map(  //TODO: set brewery results to fill out the list items
            (brewery: Brewery) => (
                <BreweryListItem 
                    brewery = {brewery} 
                    key = {brewery.id}      //using natural key b/c it's already unique
                />
            )
        );
        //TODO: add check for length zero

        return (

            <div className="container-fluid">
                <ul className="list-group">
                {listItems}
                </ul>
            </div>
        )
    }
}