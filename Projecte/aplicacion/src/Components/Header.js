import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, NavLink} from "reactstrap";
import './Header.css';
import {Link} from 'wouter';
import EnviaLogin from "../Servicio/autenticationservice";

export default function Header() {

    const isLogged = false;

        return(
            <header className="page-heading header-text container">
                {
                    isLogged ?  <Link className="gf-header"  to='/'>
                                    Login
                                </Link> :
                        <Link className="gf-header"  to='/'>
                            Logout
                        </Link>
                }
                <Link className="gf-header"  to='/Registre'>Registrar Usuario</Link>
                <div className="row">

                    <div className="col-md-12">
                        <h1>MenjaTickets</h1>
                        <br/>
                        <p> Compra i gestiona facilment els tickets menjador de l'Escola</p>
                    </div>

                </div>
            </header>
        );

}
