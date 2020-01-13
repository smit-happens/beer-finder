import React from 'react';
import Brewery from '../models/Brewery'
import { RouteComponentProps, withRouter } from 'react-router';

interface UrlParams {
    id: string;
}

interface Props extends RouteComponentProps<UrlParams> {
    brewery: Brewery
}

class BreweryListItemComponent extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this._goToBrewery = this._goToBrewery.bind(this);   //binds the "this" of _gotobrewery to the component
    }

    public render(): JSX.Element {
        const brewery = this.props.brewery;
        const isSelected = this.props.brewery.id.toString() === this.props.match.params.id;
        return (
            <li className={`list-group-item list-group-item-action" ${isSelected ? "active" : ""}`} onClick={this._goToBrewery}>
                {brewery.name}
            </li>
        )
    }

    private _goToBrewery(): void {
        this.props.history.push(`/${this.props.brewery.id}`);
    }
}

const BreweryListItem = withRouter(BreweryListItemComponent);
export default BreweryListItem;