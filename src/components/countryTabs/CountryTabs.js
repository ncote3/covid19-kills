import React, {Component} from "react";
import './CountryTabs.css';
import CountryHeader from "../countryHeader/CountryHeader";
import PersonGrid from "../personGrid/PersonGrid";
import {Tabs, Tab} from "react-bootstrap";
import callApi from "../../util/api/callApi";
import Spinner from 'react-bootstrap/Spinner'

export default class Country extends Component {
    state = {
        country: {},
        isLoading: true,
    };

    componentDidMount() {
        callApi('/api/PersonGrid')
            .then(res => this.setState({country: res.country, isLoading: false}))
            .catch(err => console.log(err));
    }

    render() {
        const data_obj = this.state.country;
        const {isLoading} = this.state;

        if (isLoading) {
            return (
                <Spinner animation="border" variant="primary" size={'lg'}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        else {
            return (
                <div className={'CountryTabs'}>
                    <Tabs defaultActiveKey="United States" id="uncontrolled-tab-example">
                        { Object.keys(data_obj).map(country => {
                            const {name, popInfected, popCured, popDead} = data_obj[country];
                            return(
                                <Tab title={name} eventKey={name}>
                                    <CountryHeader country={name}/>
                                    <PersonGrid
                                        popInfected={popInfected}
                                        popCured={popCured}
                                        popDead={popDead}
                                    />
                                </Tab>
                            )
                        })}
                    </Tabs>
                </div>
            )
        }
    }
}
