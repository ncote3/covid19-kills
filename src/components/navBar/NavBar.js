import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class NavBar extends Component {
    render() {
        return (
            <div style={{marginBottom: '2.5vw'}}>
                <Navbar bg="dark" variant="dark" style={{backgroundColor: '#494949'}}>
                    <Navbar.Brand href="#home" style={{color: '#FF5D73'}}>COVID-19 Visualized.</Navbar.Brand>
                    {/* @TODO create other pages*/}
                    {/*<Nav className="mr-auto" style={{color:'#7C7A7A'}}>*/}
                    {/*    <Nav.Link href="#home">Home</Nav.Link>*/}
                    {/*    <Nav.Link href="#features">Features</Nav.Link>*/}
                    {/*    <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar>
            </div>
        )
    }
}
