import React, {useEffect, useState} from 'react';
import {Button, Modal, Table, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './PopupCompra.css';

export default function PopupCompra ({Dies, profiles}) {
    const [show, setShow] = useState(false);
    const [diaInfant, setDiaInfant] = useState();

    useEffect(() =>{}, [Dies]);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setDiaInfant(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(diaInfant);
    }

    const handleChange = (val) => setDiaInfant(val);

    const tranformatext = (f) => {
        const dia = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
        return dia;
    }

    const tablaDias = () => {
        return Dies.map((f) => <tr>
            <td>
                {tranformatext(f)}
            </td>
            <td>
            <ToggleButtonGroup type="checkbox" value={diaInfant} onChange={handleChange}>
                {tablaInfant(f)}
            </ToggleButtonGroup>
            </td>
        </tr>)
    }

    const tablaInfant = (f) => {
        if(profiles !== null){
            return profiles.map((p) =>
                <ToggleButton variant={"outline-primary"} value={p.idAlumne + " " + tranformatext(f)}>{p.Nom}</ToggleButton>
            )
        }else {
            return <h4>Registra al teu infant</h4>
        }

    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Compra
            </Button>
            <Modal show={show}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   className="PopupCompra"
                   onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor: "#343a40"}}>
                    <Modal.Title>Selecciona infants</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body style={{backgroundColor: "#343a40"}}>
                        {Dies.length === 0 ? <h4>Selecciona els dies</h4> :
                            <>
                                <Table borderless>
                                    <tbody>
                                        {tablaDias()}
                                    </tbody>
                                </Table>
                                <h5>Total: </h5>
                            </>}
                    </Modal.Body>
                    <Modal.Footer style={{backgroundColor: "#343a40"}}>
                        <Button variant="danger" onClick={handleClose}>
                            Tancar
                        </Button>
                        <Button variant="success" type="submit">
                            Comprar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}