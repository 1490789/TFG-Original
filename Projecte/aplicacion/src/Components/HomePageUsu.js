import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServeiVistaInfant from "../Servicio/Servei_VistaInfant";
import {useLocation, Redirect} from "wouter";
import InfantButton from "./InfantButton";
import VistaInfant from "./VistaInfant";
import Calendari from "./Calendari";

export default function HomePageUsu () {
    const {profiles, getInfant, fill} = ServeiVistaInfant();
    const [, navigate] =useLocation();


    useEffect(() => {
        getInfant();
    },[])

    const handleclick = (e) =>{
        e.preventDefault();
        navigate('/RegistreInfant')
    }
    const viewInfant = () =>{
        if(profiles != null) {
            return profiles.map((profile) =>
        <VistaInfant profile={profile}></VistaInfant>)
        }
    }


    return(
         <div className="service">

                 {fill ? viewInfant() : <h1>Afegeix al teu fill</h1>}
                 <hr/>
             <div className="col-md-12">
                 <InfantButton name={"Afegir Infant"} onClick={handleclick}></InfantButton>
             </div>

             <div className="col-md-12">
                 <Calendari></Calendari>
             </div>

         </div>
    );
}