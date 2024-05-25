import React from "react";
import './ContenidoParallax.css';

function ContenidoParallax(props) {
    return (
        <div className="contenidoParallax">
            <div class="contenido-centrado">
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default ContenidoParallax;