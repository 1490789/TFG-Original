import React, {useCallback, useContext, useState} from 'react';
import Context from "../Context/UserContextProvider";

export default function ServeiVistaInfant() {
    const {jwt, setJWT} = useContext(Context);
    const [profiles, setProfiles] = useState(["hola"]);
    const [fill, setFill] = useState(false);

    const  getInfant = useCallback(() => {
        const cargoUtil = JSON.stringify(jwt);
        fetch("http://localhost/vistaInfant.php", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: cargoUtil
        }).then(res => {
            return res.json()
        }).then((res) => {
            if(!res){ setFill(false)} else {
                setFill(true);
            }
            setProfiles(res);
        }).catch(e => alert(e));
    })

    return {
        profiles,
        getInfant,
        fill
    }
}