import React from "react";
import { Parallax } from "react-parallax";
import Header from "./componentes/Header";
import './App.css'
import ContenidoParallax from "./componentes/ContenidoParallax";

function App() {
    return (
        <div className="App">
            <div className="contenerSitio">
                <Header enlace="#tituloContactar"/>
                <div className="contenedorTextoCentral">
                    <h1>Websites. Webapps. Soluciones web.</h1>
                </div>
                <Parallax
                    blur={10}
                    bgImage={'img/test/test (3).webp'}
                    bgImageAlt="Buscaminas"
                    strength={-800}
                >
                    <ContenidoParallax
                        titulo="Buscaminas"
                        texto={`Un emocionante buscaminas con una interfaz dinámica construida con React. 
                        Fusiona desafío, estilo y rendimiento con animaciones CSS cautivadoras, almacenamiento de récords en localStorage,
                         Web Workers para un juego fluido y una experiencia configurable y responsive.`}
                    />
                    <div style={{ height: '500px' }} />
                </Parallax>
                <Parallax
                    blur={10}
                    bgImage={'img/test/test (2).webp'}
                    bgImageAlt="Expense Tracker"
                    strength={-800}
                >
                    <ContenidoParallax titulo="Expense tracker" texto="Un buscaminas" />
                    <div style={{ height: '500px' }} />
                </Parallax>
                <div className="contenerTexto">
                    <p>
                        Desarrollador Full Stack enfocado en React, CSS3, Node.js, Express.js y consumo de APIs. Apasionado por crear interfaces atractivas y backends robustos. Comprometido con buenas prácticas, escalabilidad y soluciones innovadoras que aporten valor.
                    </p>
                </div>
                <div className="contenerTexto">
                    <div className="tituloContenido" id="tituloContactar">
                        Contactar
                    </div>
                    <p><a className="enlace" href="https://github.com/Ethan04Munoz">Github</a></p>
                    <p><a className="enlace" href="https://www.linkedin.com/in/ethanmuñoz/">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}

export default App;