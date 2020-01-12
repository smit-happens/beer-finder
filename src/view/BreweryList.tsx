import React from 'react';
import BreweryListItem from "./BreweryListItem";
import Brewery from '../models/Brewery';
// import { BreweryApi } from '../models/BreweryApi';
import "./BreweryList.scss";


interface Props {
    breweries: Array<Brewery>
}

export default class BreweryList extends React.Component<Props> {
public render(): JSX.Element {
        const listItems = this.props.breweries.map(  //set brewery results to fill out the list items
            (brewery: Brewery) => (
                <BreweryListItem 
                    brewery = {brewery} 
                    key = {brewery.id}      //using natural key b/c it's already unique
                />
            )
        );

        return (

            <div className="container-fluid brewery-list">
                <ul className="list-group">
                {listItems}
                </ul>
            </div>
        )
    }
}