import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export class Navegador extends React.Component {

    render() {
        return(
            <div className="navbar-collapse">
                <Navbar bg="dark" variant="dark">
                    <div className="container">
                        <div className="col-md-12">
                            <Nav className="mr-auto">
                                <Navbar.Brand>
                                    <img
                                        alt=""
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                                        width="35"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    MenjaTickets
                                </Navbar.Brand>
                                <Nav.Link href={"/Homepage"}>Inici</Nav.Link>
                                <Navbar.Collapse className="justify-content-end">
                                    <NavDropdown title={this.props.name} id="basic-nav-dropdown" >
                                        <NavDropdown.Item onClick={this.props.onClick}>Tanca sessió</NavDropdown.Item>
                                    </NavDropdown>
                                </Navbar.Collapse>

                            </Nav>
                        </div>
                    </div>


                </Navbar>
            </div>


        );
    }
}