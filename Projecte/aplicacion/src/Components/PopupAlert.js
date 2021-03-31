import React, {useState} from 'react';
import {useLocation} from "wouter";
import Modal from "react-awesome-modal";
import {Button} from "react-bootstrap";
import './PopupAlert.css';
import ServeiVistaInfant from "../Servicio/Servei_VistaInfant";

export default function PopupAlert ({idInfant}) {
    const {deleteInfant} = ServeiVistaInfant();
    const [visible, setVisible] = useState(false);
    const tamaño = {width: 250, height: 150}

    const openModal = () =>  {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false)
    }

    const handleClick = () => {
        var item = {};
        item['idAlumne'] = idInfant;
        closeModal();
        deleteInfant(item);
    };


    return (
        <>
            <Button className="FirstButton" variant="danger" value="Open" onClick={openModal}>X</Button>
            <Modal
                visible={visible}
                effect="fadeInDown"
                onClickAway={closeModal}
                className="PopupModal"
                width = "250"
                height="150"
               >
                <div className="PopupAlert">
                    <h1>¿Vols eliminar al teu fill?</h1>
                    <div className="row">
                        <div className="col">
                            <Button variant="success"  value="Open" onClick={closeModal}>Cancela</Button>
                        </div>
                        <div className="col">
                            <Button variant="danger"  value="Open" onClick={handleClick}>Elimina</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}