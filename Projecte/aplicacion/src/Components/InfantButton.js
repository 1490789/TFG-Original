
import React from "react";
import {Button} from "react-bootstrap";

export default class InfantButton extends React.Component {

   render() {
       return (
           <div className="InfantButton">
               <Button variant="dark" onClick={this.props.onClick}>{this.props.name}</Button>
           </div>
       );
   }
}