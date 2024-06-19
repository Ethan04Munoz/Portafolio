import React from "react";
import './Header.css';
import { useSelector } from 'react-redux';
import translations from '../redux/translations.js';

function Header(props) {
    const language = useSelector(state => state.language.language);

    return (
        <div className="header">
            <div className="nombre">{translations[language].headerNombre}</div>
            <div></div>
            <div className="contacto">
                <a className="enlace" href={props.enlace}>
                    {translations[language].headerTextoContacto}
                </a>
            </div>
        </div>
    )
}

export default Header;