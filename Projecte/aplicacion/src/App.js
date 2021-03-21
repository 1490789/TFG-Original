import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import Header from './Components/Header';
import Registrar from "./Components/Registrar";
import Login from './Login.js'
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Switch, Route} from "wouter";
import useUser from "./Servicio/autenticationservice";
import {UserContextProvider} from "./Context/UserContextProvider";

export default function App () {


  return (
      <UserContextProvider>
          <div>
              <Header/>
              <Switch>
                  <Route component={HomePage} path="/Homepage" />
                  <Route component={Login} path="/"/>
                  <Route component={Registrar} path="/Registre"/>
              </Switch>
          </div>

      </UserContextProvider>

  );
}


