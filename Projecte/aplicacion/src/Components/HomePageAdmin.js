import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from "wouter";
import InfantButton from "./InfantButton";

export default function HomePageAdmin () {
    const [, navigate] =useLocation();

    const handleclick = (e) =>{
        e.preventDefault();
        navigate('/Registre')
    }
    const handleclick2 = (e) =>{
        e.preventDefault();
        navigate('/RegistreInfant')
    }

    return(
            <div>
                <div className="col">
                    <InfantButton name={"Registrar Usuari"} onClick={handleclick}>Afegir Usuari </InfantButton>
                </div>
                <div className="col">
                    <InfantButton name={"Afegir Infant"} onClick={handleclick2} ></InfantButton>
                </div>
            </div>
    );
}
