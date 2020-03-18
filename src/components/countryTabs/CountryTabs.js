import React, {Component} from "react";
import './CountryTabs.css';
import CountryHeader from "../countryHeader/CountryHeader";
import PersonGrid from "../personGrid/PersonGrid";
import {Tabs, Tab} from "react-bootstrap";
import callApi from "../../util/api/callApi";

export default class Country extends Component {
    state = {
        country: {
            usa: {},
            italy: {},
        },
    };

    componentDidMount() {
        callApi('/api/PersonGrid')
            .then(res => this.setState({ country: res.country }))
            .catch(err => console.log(err));
    }

    render() {
        const { usa, italy } = this.state.country;
        return (
            <div className={'CountryTabs'}>
                <Tabs defaultActiveKey="United States" id="uncontrolled-tab-example">
                    <Tab eventKey={usa.name} title={usa.name}>
                        <div>
                            <CountryHeader country={usa.name}/>
                            <PersonGrid
                                popInfected={usa.popInfected}
                                popCured={usa.popCured}
                                popDead={usa.popDead}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey={italy.name} title={italy.name}>
                        <div>
                            <CountryHeader country={italy.name}/>
                            <PersonGrid
                                popInfected={italy.popInfected}
                                popCured={italy.popCured}
                                popDead={italy.popDead}
                            />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
