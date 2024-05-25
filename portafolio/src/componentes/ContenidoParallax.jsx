import React from "react";
import './ContenidoParallax.css';

function ContenidoParallax(props) {
    return (
        <div className="contenidoParallax">
            <div class="contenido-centrado">
                <p className="tituloContenido">{props.titulo}</p>
                <p>{props.texto}</p>
                <div className="gridEnlacesParallax">
                    <a className="enlace" href={props.enlaceSitio}>Ver sitio</a>
                    <div></div>
                    <a className="enlace" href={props.enlaceRepositorio}>Ver repositorio</a>
                </div>
            </div>
        </div>
    )
}

export default ContenidoParallax;