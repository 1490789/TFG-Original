import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import './VistaInfant.css';

export default function VistaInfant({profile, fill}) {


    const handleClick = (item) => {

    };

    return(
        <div className="col-md-12">
        { fill ?
            <div className="container">
                <div className="row Infant">
                    <div className="col InfantText">
                        <h4>{profile.Nom}</h4>
                        <h5>{profile.Congnom}</h5>
                    </div>
                    <div className="col InfantText">
                        <p>Edat: {profile.Edat}</p>
                        <p>Curs: {profile.IDCurs}</p>
                    </div>
                    <div className="col InfantText">
                        <h5>Observacions:</h5>
                        <p>{profile.Observacions}</p>
                    </div>
                    <div className="col InfantText">
                        <h5>Persona de Contacte</h5>
                        <p>{profile.Tutor}</p>
                        <p>Telefon: {profile.telefon}</p>
                    </div>
                    <div className="col btnElimina">
                        <Button variant="danger" onClick={handleClick(profile.Nom)}>Elimina</Button>
                    </div>
                </div>
            </div> : <h1>Afegeix al teu fill</h1>
        }
        </div>
    )

}