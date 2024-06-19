import React from "react";
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import translations from '../redux/translations.js';

function Header(props) {
    const language = useSelector(state => state.language.language);
    const dispatch = useDispatch();

    function cambiarIdioma(nuevoIdioma) {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: nuevoIdioma });
    }

    return (
        <div className="header">
            <div className="nombre">{translations[language].headerNombre}</div>
            <div className="idiomas">
                <div 
                    className={`idioma ${language === 'es' ? 'active' : ''}`} 
                    onClick={() => cambiarIdioma('es')}
                >
                    Es
                </div>
                <div 
                    className={`idioma ${language === 'en' ? 'active' : ''}`} 
                    onClick={() => cambiarIdioma('en')}
                >
                    En
                </div>
            </div>
            <div className="contacto">
                <a className="enlace" href={props.enlace}>
                    {translations[language].headerTextoContacto}
                </a>
            </div>
        </div>
    );
}

export default Header;
