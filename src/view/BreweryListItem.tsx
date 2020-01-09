import React from 'react';
// import Brewery from '../models/Brewery'



// interface Props {
//     brewery: Brewery
// }

export default class BreweryListItem extends React.Component {
    // export default class BreweryListItem extends React.Component<Props> {
    render() {
        // const brewery = this.props.brewery;
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