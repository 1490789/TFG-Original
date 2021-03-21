import React, {useEffect, useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, NavLink} from "reactstrap";
import './Header.css';
import {Link} from 'wouter';
import useUser from "../Servicio/autenticationservice";
import Context from "../Context/UserContextProvider";

export default function Header() {
    const {isLogged, logout, foundname, user} = useUser();

    useEffect(()=>{
        if(isLogged)foundname();
    },[isLogged])

    const handleclick = e => {
        e.preventDefault();
        logout();
    }

    return(
        <header className="page-heading header-text container">
            {
                isLogged ?  <Link className="gf-header" to={'/'} onClick={handleclick}>
                    {user}
                </Link> :
                    <Link className="gf-header"  to='/'>
                        Login
                    </Link>
            }
            {
                user == 'admin' ? <Link className="gf-header"  to='/Registre'>Registrar Usuario</Link> : null
            }
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
