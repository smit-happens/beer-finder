import React from 'react';
import Brewery from '../models/Brewery'

interface Props {
    brewery: Brewery
}

export default class BreweryListItem extends React.Component<Props> {

    render() {
        const brewery = this.props.brewery;
        console.log(brewery);
        return (
            <div>This is a brewrey</div>
        )
    }
}