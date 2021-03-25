import React, {useEffect, useState}from 'react';
import './Header.css';
import {useLocation} from "wouter";
import useUser from "../Servicio/autenticationservice";
import {Navegador} from "./Navegador";



export default function Header() {
    const {isLogged, logout, foundname, user} = useUser();
    const [, navigate] =useLocation();

    useEffect(()=>{
        if(isLogged) foundname();
    },[isLogged])

    const handleclick = e => {
        e.preventDefault();
        logout();
        navigate('/');
    }

    return(
        <div>
            <header className="page-heading header-text">

                {
                    isLogged ?
                        <Navegador name={user} onClick={handleclick}> </Navegador>
                        :
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>MenjaTickets</h1>
                                    <br/>
                                    <p className="subtitle"> Compra i gestiona facilment els tickets menjador de l'Escola</p>
                                </div>
                            </div>
                        </div>
                }

            </header>
        </div>

    );
}
