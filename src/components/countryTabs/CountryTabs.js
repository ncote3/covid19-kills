import React, {Component, Suspense} from "react";
import './CountryTabs.scss';
import CountryHeader from "../countryHeader/CountryHeader";
import {Tabs, Tab} from "react-bootstrap";
import callApi from "../../util/api/callApi";
import Spinner from 'react-bootstrap/Spinner'
const PersonGrid = React.lazy(() => import('../personGrid/PersonGrid'));

export default class CountryTabs extends Component {
    state = {
        country:[],
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
                    <Tabs defaultActiveKey="UnitedStates" id="uncontrolled-tab-example">
                        { Object.keys(data_obj).map(country => {
                            const {name, popInfected, popCured, popDead} = data_obj[country];
                            return(
                                <Tab title={name} eventKey={name}>
                                    <CountryHeader country={name}/>
                                    <Suspense fallback={
                                        <Spinner style={{margin: '2.5vw'}} animation="border" variant="primary" size={'lg'}>
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }>
                                        <PersonGrid
                                            popInfected={popInfected}
                                            popCured={popCured}
                                            popDead={popDead}
                                        />
                                    </Suspense>
                                </Tab>
                            )
                        })}
                    </Tabs>
                </div>
            )
        }
    }
}
