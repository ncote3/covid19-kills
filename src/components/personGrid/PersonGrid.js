import React, {Component} from "react";
import './PersonGrid.scss';
import Person from "../person/Person";
import {Badge, Container, Dropdown, Row} from "react-bootstrap";

export default class PersonGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 10,
        };
        this.toggleScale = this.toggleScale.bind(this);
    }

    toggleScale(scale, e) {
        this.setState({scale});
    }

    render() {
        const {popInfected, popDead, popCured} = this.props;
        const popCount = popInfected + popDead + popCured;
        const popNotInfected = popCount - popInfected - popDead - popCured;

        const scale = this.state.scale;

        const popNotInfectedScaled = popNotInfected/scale;
        const popCountScaled = popCount/scale;
        const popInfectedScaled = popInfected/scale;
        const popCuredScaled = popCured/scale;

        let popVars = [], i = 0;
        while (++i <= popCountScaled) popVars.push(i);

        return (
            <div className={'Person-Grid'}>
                <Container className={'Person-Grid-Pill-Container'}>
                    <Row>
                        {/* @TODO find total population count*/}
                        {/*{ popNotInfected > 0 ?*/}
                        {/*    <Badge variant="primary" style={{backgroundColor: 'black'}}>Not Infected</Badge> :*/}
                        {/*    <h1>Everyone is infected! Good luck my friend...</h1>*/}
                        {/*}*/}

                        {/* @TODO fix error spacing*/}
                        { popCured > 0 ?
                            <Badge variant="primary" style={{backgroundColor: '#7C7A7A'}}>
                                Cured<br/>{popCured}
                            </Badge> :
                            <Badge variant="primary" style={{backgroundColor: '#7C7A7A'}}>
                                Nobody has been cured!! Might be a good time to start preparing...
                            </Badge>
                        }
                        { popInfected > 0 ?
                            <Badge variant="primary" style={{backgroundColor: '#FF5D73'}}>
                                Infected<br/>{popInfected}
                            </Badge> :
                            <Badge variant="primary" style={{backgroundColor: '#FF5D73'}}>
                                There are no infected! Amazing!!
                            </Badge>
                        }
                        { popDead > 0 ?
                            <Badge variant="primary" style={{backgroundColor: '#000000'}}>
                                Dead<br/>{popDead}
                            </Badge> :
                            <Badge variant="primary" style={{backgroundColor: '#000000'}}>
                                There are no dead! Incredible!
                            </Badge>
                        }
                    </Row>
                </Container>
                <Container className={'Person-Grid-Magnitude-Selector'}>
                    <Row>
                        <Dropdown>
                            <Dropdown.Toggle>
                                Scale
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={10} onSelect={this.toggleScale}>
                                    1 Person : 10 People
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={100} onSelect={this.toggleScale}>
                                    1 Person : 100 People
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={1} onSelect={this.toggleScale}>
                                    Actual (Warning: May take a minute!)
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                </Container>
                <Container className={'Person-Grid-Person-Container'}>
                    <Row>
                        {
                            popVars.map(function (i) {
                                if (i <= popNotInfectedScaled) {
                                    return <Person statusClass={'Person-not-infected'} key={i} index={i}/>
                                } else if (i > popNotInfectedScaled && i <= popNotInfectedScaled + popCuredScaled) {
                                    return <Person statusClass={'Person-cured'} key={i} index={i}/>;
                                } else if (
                                    i > popNotInfectedScaled + popCuredScaled &&
                                    i < popNotInfectedScaled + popCuredScaled + popInfectedScaled
                                ) {
                                    return <Person statusClass={'Person-infected'} key={i} index={i}/>;
                                } else {
                                    return <Person statusClass={'Person-dead'} key={i} index={i}/>;
                                }
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}
