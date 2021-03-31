import React from "react";
import {Accordion, Button} from "react-bootstrap";

export default class InfantList extends React.Component{

    render() {
        return (
            <li>
                <Accordion style={{backgroundColor: this.props.background()}}>
                    <Accordion.Toggle className="NomInfant" eventKey="0" as={Button} variant={"link"}>
                        <p>{this.props.profile.Nom} {this.props.profile.Congnom}</p>
                    </Accordion.Toggle>
                    <Accordion.Collapse className="container collapseALL" eventKey="0">
                        <p>Observacions: {this.props.profile.Observacions} Tutor: {this.props.profile.Tutor} Telèfon:{this.props.profile.telefon}</p>
                    </Accordion.Collapse>
                </Accordion>
            </li>
        )
    }
}