import React, {useCallback, useState} from 'react';

export default function Registre() {
    const [registrat, setRegistrat] = useState(false);

    const registra = useCallback((item) => {
        const cargoUtil = JSON.stringify(item);
        fetch("http://localhost/registrarse.php", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: cargoUtil
        }).then(res => {
            return res.json()
        }).then((res) => {
            if(res){
                setRegistrat(res);
                alert("Registre correcte")
            }else{
                alert("Registre incorrecte, revisa les credencials")
            }
        }).catch(e => alert(e));
    })

    return {
        registra,
        registrat
    }
}