import React, {Component} from "react";
import './CountryHeader.css';

export default class PersonGrid extends Component {
    render() {
        const { country } = this.props;

        return (
            <div>
                <h1 style={{color: '#FF5D73', margin: '0.5vw', fontSize: '40pt'}}>{ country }</h1>
            </div>
        )
    }
}
