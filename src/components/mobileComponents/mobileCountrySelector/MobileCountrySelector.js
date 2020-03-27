import React, {Component} from "react";
import {Button} from "react-bootstrap";
import PersonGrid from "../../personGrid/PersonGrid";
import CountryHeader from "../../countryHeader/CountryHeader";

export default class MobileCountrySelector extends Component {
    state = {
        selectingCountry: true,
        activeCountry: '',
    };

    handleCountrySelection(country) {
        this.setState({
           selectingCountry: false,
           activeCountry: country
        });
    }

    render() {
        const {countries} = this.props;
        const {selectingCountry, activeCountry} = this.state;

        if (selectingCountry) {
            return (
                <div>
                    {
                        Object.key(countries).map(country => {
                            return (
                                <Button onclick={this.handleCountrySelection(country)}>
                                    {country}
                                </Button>
                            )
                        })
                    }
                </div>
            )
        } else {
            const {popInfected, popRecovered, popDead} = countries[activeCountry];

            return (
                <div>
                    <CountryHeader country={activeCountry}/>
                    <PersonGrid
                        popInfected={popInfected}
                        popRecovered={popRecovered}
                        popDead={popDead}
                    />
                </div>
            )
        }
    }
}
