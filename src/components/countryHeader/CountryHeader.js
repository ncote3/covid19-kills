import React, {Component} from "react";
import './CountryHeader.scss';

export default class PersonGrid extends Component {
    render() {
        const { country } = this.props;

        return (
            <div>
                <h1 className={'CountryHeader'}>{ country }</h1>
            </div>
        )
    }
}
