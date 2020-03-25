import React, { Component } from "react";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import './NavBar.scss';

export default class NavBar extends Component {
    render() {
        return (
            <div style={{marginBottom: '2.5vw'}}>
                <Navbar bg="dark" variant="dark" style={{backgroundColor: '#494949'}}>
                    <Navbar.Brand href="#home" style={{color: '#FF5D73'}}>COVID-19 Visualized.</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <NavLink>Home</NavLink>
                        </LinkContainer>
                        <LinkContainer to='/data'>
                            <NavLink>Data</NavLink>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <NavLink>About</NavLink>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
