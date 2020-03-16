import React, {Component} from "react";
import './CountryTabs.css';
import CountryHeader from "../countryHeader/CountryHeader";
import PersonGrid from "../personGrid/PersonGrid";
import {Tabs, Tab} from "react-bootstrap";

export default class Country extends Component {
    render() {
        const { country1, country2 } = this.props;
        return (
            <div className={'CountryTabs'}>
                <Tabs defaultActiveKey="United States" id="uncontrolled-tab-example">
                    <Tab eventKey="United States" title="United States">
                        <div>
                            <CountryHeader country={country1}/>
                            <PersonGrid
                                popInfected={3880}
                                popCured={8}
                                popDead={61}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey="Italy" title="Italy">
                        <div>
                            <CountryHeader country={country2}/>
                            <PersonGrid
                                popInfected={24747}
                                popCured={2335}
                                popDead={1809}
                            />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
