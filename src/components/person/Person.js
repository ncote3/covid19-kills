import React, { Component } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Person.scss'

export default class Person extends Component {
    render() {
        const statusClass = this.props.statusClass;

        return (
            <div>
               <FontAwesomeIcon icon={faUser} className={statusClass}/>
            </div>
        )
    }
}
