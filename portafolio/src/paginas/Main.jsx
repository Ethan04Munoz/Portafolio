import React from "react";
import Header from "../componentes/Header";
import Parallax from "../componentes/Parallax";
import '../App.css'
import ContenidoParallax from "../componentes/ContenidoParallax";
import { useSelector } from 'react-redux';
import translations from '../redux/translations.js';
import ParallaxColor from "../componentes/ParallaxColor.jsx";

function Main() {
    const language = useSelector(state => state.language.language);

/*
267158
943156
AA8239
*/

    return (
        <div className="App">
            <div className="contenerSitio">
                <Header enlace="#tituloContactar" />
                <div className="contenedorTextoCentral">
                    <h1>{translations[language].mainTitulo}</h1>
                </div>
                <ParallaxColor
                        titulo={translations[language].mainProyecto1Titulo}
                        texto={translations[language].mainProyecto1Texto}
                        enlaceRepositorio="https://github.com/Ethan04Munoz/Buscaminas"
                        enlaceSitio="https://ethan04munoz.github.io/Buscaminas/"
                    baseColor={"#267158"}
                />
                <ParallaxColor
                    titulo={translations[language].mainProyecto2Titulo}
                    texto={translations[language].mainProyecto2Texto}
                    enlaceRepositorio="https://github.com/Ethan04Munoz/ExpenseTracker"
                    enlaceSitio="https://ethan04munoz.github.io/ExpenseTracker/"
                    baseColor={"#943156"}
                />
                
                <div className="contenerTexto">
                    <p>
                        {translations[language].mainTextoPresentacion}
                    </p>
                </div>

                <div className="contenerTexto">
                    <div className="tituloContenido" id="tituloContactar">
                        {translations[language].mainTextoContacto}
                    </div>
                    <p><a className="enlace" href="https://github.com/Ethan04Munoz">Github</a></p>
                    <p><a className="enlace" href="https://www.linkedin.com/in/ethanmuñoz/">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}

export default Main;