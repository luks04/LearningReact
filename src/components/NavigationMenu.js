import React from 'react';
import '../assets/css/App.css';
import '../assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons'

function NavigationMenu (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/Home"><FontAwesomeIcon icon={faAtom} /> Learning React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Functional Components" id="collasible-nav-dropdown">
                    <NavDropdown.Item href='/HelloWorld'>Hello World</NavDropdown.Item>
                    <NavDropdown.Item href="/Composition">Composition</NavDropdown.Item>
                    <NavDropdown.Item href="/ConditionalRendering">Conditional Rendering</NavDropdown.Item>
                    <NavDropdown.Item href="/PreventingRendering">Preventing Rendering</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Class Components" id="collasible-nav-dropdown">
                    <NavDropdown.Item href='/Welcome'>Welcome</NavDropdown.Item>
                    <NavDropdown.Item href="/Counter">State</NavDropdown.Item>
                    <NavDropdown.Item href="/LifeCycleMethods">Life Cycle Methods</NavDropdown.Item>
                    <NavDropdown.Item href="/EventHandler">Event Handlers</NavDropdown.Item>
                    <NavDropdown.Item href="/LiftingStateUp">Lifting State Up</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/Game'>Game</Nav.Link>
                <NavDropdown title="Arrays Rendering" id="collasible-nav-dropdown">
                    <NavDropdown.Item href='/Lists'>Lists</NavDropdown.Item>
                    <NavDropdown.Item href="/ExtractingListItems">Extracting List Items</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='/Forms'>Forms</Nav.Link>
                <Nav.Link href='/Poster'>Poster</Nav.Link>
                <Nav.Link href='/RestApiConsume'>Fetch</Nav.Link>
                <Nav.Link href='/Hooks'>Hooks</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationMenu;
