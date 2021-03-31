import React, {useEffect, useState}from 'react';
import './Header.css';
import {useLocation} from "wouter";
import useUser from "../Servicio/autenticationservice";
import {Navegador} from "./Navegador";



export default function Header() {
    const {isLogged, logout, user} = useUser();
    const [, navigate] =useLocation();

    useEffect(()=>{
    },[isLogged])

    const handleclick = e => {
        e.preventDefault();
        logout();
        navigate('/Homepage');
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
                                <div className="col-md-12 LoginTitle">
                                    <h1 className="">MenjaTickets</h1>
                                    <br/>
                                    <p className="subtitle"> Compra i gestiona facilment els tickets menjador de l'Escola dels teus fills</p>
                                </div>
                            </div>
                        </div>
                }

            </header>
        </div>

    );
}
