import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServeiVistaInfant from "../Servicio/Servei_VistaInfant";
import {useLocation, Redirect} from "wouter";
import InfantButton from "./InfantButton";
import VistaInfant from "./VistaInfant";

export default function HomePageUsu () {
    const {profiles, getInfant, fill} = ServeiVistaInfant();
    const [, navigate] =useLocation();


    useEffect(() => {
        getInfant();
    },[fill])

    const handleclick = (e) =>{
        e.preventDefault();
        navigate('/RegistreInfant')
    }
    const viewInfant = profiles.map((profile) =>
        <VistaInfant fill={fill} profile={profile}></VistaInfant>)


    return(
         <div className="service">
                {viewInfant}
                <hr/>
                <div className="col-md-12">
                    <InfantButton name={"Afegir Infant"} onClick={handleclick}></InfantButton>
                </div>
         </div>
    );
}