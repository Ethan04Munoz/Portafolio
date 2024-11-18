import React from 'react';
import './ParallaxColor.css';
import "./ContenidoParallax.css";
import { useSelector } from 'react-redux';
import translations from '../redux/translations.js';

const adjustColorBrightness = (hex, amount) => {
    let usePound = false;
    if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
    }

    let num = parseInt(hex, 16);
    let r = Math.max(0, Math.min(255, (num >> 16) + amount));
    let g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    let b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));

    return (usePound ? "#" : "") + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
};

const ParallaxColor = ({ titulo, texto, enlaceRepositorio, enlaceSitio, baseColor }) => {
    const language = useSelector(state => state.language.language);
    const darkerColor = adjustColorBrightness(baseColor, -40);

    return (
        <div className="container">
            <div className="hover-box" style={{ backgroundColor: baseColor }}>
                <div className="left-side" style={{ backgroundColor: baseColor }}>
                    <div class="section diagonal superior" style={{ backgroundColor: darkerColor }}></div>
                    <div class="section" style={{ backgroundColor: baseColor }}>{titulo}</div>
                    <div class="section diagonal inferior" style={{ backgroundColor: darkerColor }}></div>
                </div>
                <div className="right-side" style={{ backgroundColor: darkerColor }}>
                    <div class="contenido-centrado">
                        <p className="tituloContenido">{titulo}</p>
                        <p>{texto}</p>
                        <div className="gridEnlacesParallax">
                            <a className="enlace" href={enlaceSitio}>{translations[language].contenidoParallaxLinkSitio}</a>
                            <div></div>
                            <a className="enlace" href={enlaceRepositorio}>{translations[language].contenidoParallaxLinkRepositorio}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxColor;
