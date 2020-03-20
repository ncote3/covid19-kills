import React, { Component } from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div style={{marginBottom: '2.5vw'}}>
                <Navbar bg="dark" variant="dark" style={{backgroundColor: '#494949'}}>
                    <Navbar.Brand href="#home" style={{color: '#FF5D73'}}>COVID-19 Visualized.</Navbar.Brand>
                    <Nav className="mr-auto" style={{color:'#7C7A7A'}}>
                        <LinkContainer to='/'>
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/data'>
                            <NavItem>Data</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <NavItem>About</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
