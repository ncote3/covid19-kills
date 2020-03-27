import React, {Component} from "react";
import './CountryVisuals.scss';
import {ButtonGroup, Button} from "react-bootstrap";
import callApi from "../../util/api/callApi";
import Spinner from 'react-bootstrap/Spinner'
import CountrySelector from "../countrySelector/CountrySelector";
import formatRegion from "../../util/formattors/formattors";
import mobileDetect from "../../util/browserInfo/browserInfo";
import MobileRegionSelector from "../mobileComponents/mobileRegionSelector/MobileRegionSelector";

export default class CountryVisuals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
            activeRegion: 'northAmerica',
            isLoading: true,
        };
    }


    componentDidMount() {
        callApi('/api/PersonGrid')
            .then(res => this.setState({data: res.data, isLoading: false}))
            .catch(err => console.log(err));
    }

    handleRegionChange = (e, newRegion) => {
        e.preventDefault();
        this.setState({activeRegion: newRegion});
    };

    render() {
        const {isLoading, activeRegion, data} = this.state;
        const browserInfo = mobileDetect();
        const {isDesktop} = browserInfo;


        if (isLoading) {
            return (
                <Spinner animation="border" variant="primary" size={'lg'}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        else if (!isLoading && isDesktop){
            return (
                <div className={'CountryVisuals'}>
                    <ButtonGroup>
                        {
                            Object.keys(data).map(region => {
                                const formattedRegion = formatRegion(region);

                                return (
                                    <Button
                                        onClick={(e) => this.handleRegionChange(e, region)}
                                        className={(activeRegion === region) ? 'activeRegion': ''}
                                    >
                                        {formattedRegion}
                                    </Button>
                                )
                            })
                        }
                    </ButtonGroup>
                    <CountrySelector countries={data[activeRegion]} activeRegion={activeRegion}/>
                </div>
            )
        } else {
            return (
                <div className={'CountryVisualsMobile'}>
                    <MobileRegionSelector data={data}/>
                </div>
            );
        }
    }
}
