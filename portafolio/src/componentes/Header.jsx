import React from "react";
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="nombre">Ethan</div>
            <div></div>
            <div className="contacto">
                <a className="enlace" href={props.enlace}>
                    Contactar
                </a>
            </div>
        </div>
    )
}

export default Header;