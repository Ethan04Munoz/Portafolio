import React from "react";
import './ContenidoParallax.css';
import { useSelector } from 'react-redux';
import translations from '../redux/translations.js'; 

function ContenidoParallax(props) {
    const language = useSelector(state => state.language.language); 

    return (
        <div className="contenidoParallax">
            <div class="contenido-centrado">
                <p className="tituloContenido">{props.titulo}</p>
                <p>{props.texto}</p>
                <div className="gridEnlacesParallax">
                    <a className="enlace" href={props.enlaceSitio}>{translations[language].contenidoParallaxLinkSitio}</a>
                    <div></div>
                    <a className="enlace" href={props.enlaceRepositorio}>{translations[language].contenidoParallaxLinkRepositorio}</a>
                </div>
            </div>
        </div>
    )
}

export default ContenidoParallax;