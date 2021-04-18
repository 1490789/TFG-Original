import React, {useState, useEffect} from 'react';
import {useLocation} from "wouter";
import './Registrar.css';
import Registre from "../Servicio/enviarRegistrar";

export default function Registrar(){
    const [profile, setProfile] = useState({});
    const [, navigate] =useLocation();
    const {registra, registrat} = Registre();

    useEffect(() =>{
        if(registrat) navigate('/Homepage');
    },[registrat])

    const handleChange = ({ target }) => {
        const  {name, value} = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        registra(profile)
    };

    return(
        <div>
            <div className="container">
                <div className="abs-center">
                    <form onSubmit={handleSubmit} className=" p-2 form">
                        <div className="form-group">
                            <h4>Registrar Usuari</h4>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usuari">Usuari</label>
                            <input value={profile.usuari || ''} type="text" name="usuari" id="usuari" className="form-control" onChange={handleChange} maxLength="30" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={profile.email || ''} type="email" name="email" id="email" className="form-control" onChange={handleChange} maxLength="30" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Contrasenya</label>
                            <input value={profile.pass || ''} type="password" name="pass" id="pass" className="form-control" onChange={handleChange} maxLength="30" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repass">Repeteix Contrasenya</label>
                            <input value={profile.repass || ''} type="password" name="repass" id="repass" className="form-control" onChange={handleChange} maxLength="30" required/>
                        </div>
                        <button type="submit" className="btn btn-dark">Registrar</button>
                    </form>
                </div>
            </div>

        </div>

    );

}