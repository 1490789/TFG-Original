import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUser from "../Servicio/autenticationservice";
import HomePageAdmin from "./HomePageAdmin";
import HomePageUsu from "./HomePageUsu";
import { Redirect} from "wouter";

import './HomePage.css';

export default function HomePage () {
    const {isLogged, user} = useUser();

    useEffect(()=>{
    }, [isLogged, user] )

    return(
        <div>
            { !isLogged ? <Redirect to={'/'}/> :
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Home</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            user === 'admin' ?
                                <HomePageAdmin/>
                                :
                                <HomePageUsu/>
                        }
                    </div>
                </div>
                }

        </div>

    );
}



