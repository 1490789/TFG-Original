
export default function registra(item){
    const cargoUtil = JSON.stringify(item);
    var registrado = false;
    alert(cargoUtil);
    fetch("http://localhost/registrarse.php",{
        method:"POST",
        headers: {
            "Content-Type":'application/json'
        },
        body: cargoUtil
    }).then(res=>res.json()
    ).then((res)=> {registrado=res});

    return registrado;
}