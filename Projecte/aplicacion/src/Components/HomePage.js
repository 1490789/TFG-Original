import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader} from "reactstrap";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loggin: ""
        };
    }

    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col-5">
                    <h1>Nombre Hijo</h1>
                    <h1>curso</h1>
                    <Button color="primary">Editar Perfil</Button>
                </div>
            </div>
            </div>
        );
    }
}
export default HomePage;


