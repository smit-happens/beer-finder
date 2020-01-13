import React from 'react';
import Brewery from '../models/Brewery'
import { RouteComponentProps, withRouter } from "react-router";
import "./BreweryListItem.scss"

interface UrlParams {
    id: string;
}

interface Props extends RouteComponentProps<UrlParams> {
    brewery: Brewery
}

class BreweryListItemComponent extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.goToBrewery = this.goToBrewery.bind(this);   //binds the "this" of gotobrewery to the component
    }

    public render(): JSX.Element {
        const brewery = this.props.brewery;
        const isSelected = this.props.brewery.id.toString() === this.props.match.params.id;
        return (
            <li className={`list-group-item list-group-item-action" ${isSelected ? "active" : ""}`} onClick={this.goToBrewery}>
                <h5>{brewery.name}</h5>
                <small>Style: {brewery.brewery_type}</small>
                <div>{brewery.city}, {brewery.state}</div>
            </li>
        )
    }

    private goToBrewery(): void {
        this.props.history.push(`/${this.props.brewery.id}`);
    }
}

const BreweryListItem = withRouter(BreweryListItemComponent);
export default BreweryListItem;