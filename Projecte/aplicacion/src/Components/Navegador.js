import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "wouter";

export class Navegador extends React.Component {

    render() {
        return(
            <Navbar className="NavMenu" bg="dark" expand="lg" variant="dark">
                <div className="container">
                <Navbar.Brand href="/Homepage">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        width="45"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />MenjaTickets</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link><Link to={"/Homepage"}>Inici</Link></Nav.Link>
                        {this.props.name === 'admin' ? <Nav.Link><Link to={"/TotsInfants"}>Infants</Link></Nav.Link> : <Nav.Link href="#link">Reserves</Nav.Link> }
                        <NavDropdown title={this.props.name} id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.props.onClick}>Tanca sessió</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>


        );
    }
}