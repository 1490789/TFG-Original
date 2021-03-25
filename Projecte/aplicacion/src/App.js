import './App.css';
import HomePage from './Components/HomePage.js';
import Header from './Components/Header';
import Registrar from "./Components/Registrar";
import RegistrarInfant from "./Components/RegistrarInfant";
import Login from './Login.js'
import React, {useEffect, useState} from "react";
import {Switch, Route} from "wouter";
import useUser from "./Servicio/autenticationservice";
import {UserContextProvider} from "./Context/UserContextProvider";
import {useLocation} from "wouter";

export default function App () {
    const {isLogged, logout, foundname, user} = useUser();
    const [, navigate] =useLocation();

    useEffect(() => {
        if(!isLogged) {navigate('/')}
    }, [isLogged, navigate])

  return (
      <UserContextProvider>
          <div>
              <Header/>
              <Switch>
                  <Route component={HomePage} path="/Homepage"/>
                  <Route component={Registrar} path="/Registre" />
                  <Route component={RegistrarInfant} path="/RegistreInfant" />
                  <Route component={Login} path="/"/>
              </Switch>
          </div>

      </UserContextProvider>

  );
}


