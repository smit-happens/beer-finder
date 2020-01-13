import React from 'react';
import "./SearchBar.scss";

interface Props {
    searchText: string;
    onSearchTextChanged: (searchText: string) => void;
}


export default class SearchBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this._onSearchTextChanged = this._onSearchTextChanged.bind(this);
    }

    public render(): JSX.Element {
        return (
            <nav className="navbar navbar-expand-lg mb-4">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline mr-auto">
                        <div className="md-form my-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" 
                                value={this.props.searchText} onChange={this._onSearchTextChanged}/>
                            <i className="fas fa-search text-white ml-3" aria-hidden="true"></i>
                        </div>
                    </form>
                </div>

                <h1 className="text-white">Beer Finder 9000</h1>>

            </nav>
        )
    }

    private _onSearchTextChanged(e: React.FormEvent<HTMLInputElement>): void {
        e.preventDefault();
        this.props.onSearchTextChanged(e.currentTarget.value);
    }
}