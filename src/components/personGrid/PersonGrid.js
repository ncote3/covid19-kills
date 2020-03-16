import React, {Component} from "react";
import './PersonGrid.css';
import Person from "../person/Person";
import {Badge, Container, Row} from "react-bootstrap";

export default class PersonGrid extends Component {
    render() {
        const {popInfected, popDead, popCured} = this.props;
        const popCount = popInfected + popDead + popCured;
        const popNotInfected = popCount - popInfected - popDead - popCured;

        let popVars = [], i = 0, len = popCount;
        while (++i <= popCount) popVars.push(i);

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
                            <Badge variant="primary" style={{backgroundColor: '#7C7A7A'}}>Cured<br/>{popCured}</Badge> :
                            <h1>Nobody has been cured!! Might be a good time to start preparing...</h1>
                        }
                        { popInfected > 0 ?
                            <Badge variant="primary" style={{backgroundColor: '#FF5D73'}}>Infected<br/>{popInfected}</Badge> :
                            <h1>There are no infected! Amazing!!</h1>
                        }
                        { popDead > 0 ?
                            <Badge variant="primary" style={{backgroundColor: '#000000'}}>Dead<br/>{popDead}</Badge> :
                            <h1>There are no dead! Incredible!</h1>
                        }
                    </Row>
                </Container>
                <Container className={'Person-Grid-Person-Container'}>
                    <Row>
                        {
                            popVars.map(function (i) {
                                if (i <= popNotInfected) {
                                    return <Person statusClass={'Person-not-infected'} key={i} index={i}/>
                                } else if (i > popNotInfected && i <= popNotInfected + popCured) {
                                    return <Person statusClass={'Person-cured'} key={i} index={i}/>;
                                } else if (
                                    i > popNotInfected + popCured &&
                                    i < popNotInfected + popCured + popInfected
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
