import React, {Component, Suspense} from "react";
import {Tabs, Tab} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import CountryHeader from "../countryHeader/CountryHeader";
import './CountrySelector.scss';
const PersonGrid = React.lazy(() => import('../personGrid/PersonGrid'));

export default class CountrySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultActiveKey: {
                northAmerica: 'USA',
                oceania: 'Australia',
                middleEast: 'Iran',
                asia: 'China',
                caribbean: 'Cuba',
                southAmerica: 'Brazil',
                Other: '',
                africa: 'Egypt',
                europe: 'Italy',
            }
        }
    }

    render() {
        const {countries, activeRegion} = this.props;
        const defaultActiveKey = this.state.defaultActiveKey;

        return (
            <Tabs defaultActiveKey={defaultActiveKey[activeRegion]} id={activeRegion}>
                {
                    Object.keys(countries).map(country => {
                        const {name, popInfected, popRecovered, popDead} = countries[country];
                        return (
                            <Tab title={name} eventKey={name} key={name}>
                                <CountryHeader country={name}/>
                                <Suspense fallback={
                                    <Spinner style={{margin: '2.5vw'}}
                                             animation={"border"}
                                             variant={"primary"}
                                             size={'lg'}
                                    >
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                }>
                                    <PersonGrid
                                        popInfected={popInfected}
                                        popCured={popRecovered}
                                        popDead={popDead}
                                    />
                                </Suspense>
                            </Tab>
                        )
                    })
                }
            </Tabs>
        );
    }
}
