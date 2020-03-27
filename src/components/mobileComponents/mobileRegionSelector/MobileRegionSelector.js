import React, {Component} from "react";
import './MobileRegionSelector.scss';
import formatRegion from "../../../util/formattors/formattors";
import {Button} from "react-bootstrap";
import MobileCountrySelector from "../mobileCountrySelector/MobileCountrySelector";

export default class MobileRegionSelector extends Component {
    state = {
        isRegionSelecting : true,
        regionSelected: '',
    };

    handleRegionSelection(e, newRegion) {
        e.preventDefault();

        this.setState({
            isRegionSelecting: false,
            regionSelected: newRegion,
        })
    }

    render() {
        const {data} = this.props;
        const {isRegionSelecting, regionSelected} = this.state;

        if (isRegionSelecting) {
            return (
                <div className='MobileRegionSelector'>
                    {
                        Object.keys(data).map(region => {
                            const formattedRegion = formatRegion(region);

                            return (
                                <Button onclick={this.handleRegionSelection(region)}>
                                    {formattedRegion}
                                </Button>
                            )
                        })
                    }
                </div>
            )
        } else {
            return (
                <MobileCountrySelector countries={data[regionSelected]} />
            )
        }
    }
}
