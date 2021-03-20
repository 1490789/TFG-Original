import React, {useState, useEffect} from 'react';
import './Login.css';
import {useLocation} from "wouter";
import {autenticationService} from "./Servicio/autenticationservice";

export default function Login(){
    const [profile, setProfile] = useState({})
    const [, navigate] =useLocation();
    const [islogged, setIsLogged] =useState(false);


    const handleChange = ({ target }) => {
        const  {name, value} = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLogged(autenticationService.login(profile));
        navigate('/Homepage');
    };



    return(
        <div>
            <div className="container">
                <div className="abs-center">
                    <form onSubmit={handleSubmit} className=" p-2 form">
                        <div className="form-group">
                            <h4>Inicia sessió</h4>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usuari">Usuari</label>
                            <input value={profile.usuari || ''} type="text" name="usuari" id="usuari" className="form-control" onChange={handleChange} minLength={"1"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Contraseña</label>
                            <input value={profile.pass || ''} type="password" name="pass" id="pass" className="form-control" onChange={handleChange} minLength={"1"}/>
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>
            </div>

        </div>

    );

}
