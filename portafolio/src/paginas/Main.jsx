import React from "react";
import Header from "../componentes/Header";
import Parallax from "../componentes/Parallax";
import '../App.css'
import ContenidoParallax from "../componentes/ContenidoParallax";

function Main() {
    return (
        <div className="App">
            <div className="contenerSitio">
                <Header enlace="#tituloContactar"/>
                <div className="contenedorTextoCentral">
                    <h1>Websites. Webapps. Soluciones web.</h1>
                </div>
                <Parallax
                    backgroundImage={'img/webp/buscaminasCut.webp'}
                    strength={0.8}
                    blur={10}
                    darken={20}
                    id={'primerProyecto'}
                >
                    <ContenidoParallax
                        titulo="Buscaminas"
                        texto={`Un emocionante buscaminas con una interfaz dinámica construida con React. 
                        Fusiona desafío, estilo y rendimiento con animaciones CSS cautivadoras, almacenamiento de récords en localStorage, 
                        Web Workers para un juego fluido y una experiencia configurable y responsive.`}
                        enlaceRepositorio="https://github.com/Ethan04Munoz/Buscaminas"
                        enlaceSitio="https://ethan04munoz.github.io/Buscaminas/"
                    />
                    <div style={{ height: '500px', borderRadius: '1rem 0 1rem 0' }} />
                </Parallax>
                <Parallax
                    backgroundImage={'img/webp/expenseTrackerCut.webp'}
                    strength={0.8}
                    blur={10}
                    darken={20}
                    id={'ultimoProyecto'}
                >
                    <ContenidoParallax 
                        titulo="Expense tracker" 
                        texto={`Un gestor de gastos e ingresos creado con React que simplifica el control financiero. 
                            Permite registrar transacciones fácilmente, marcar entradas como recurrentes y ofrece notificaciones visuales atractivas con toast. 
                            Gracias a CSS3, el diseño es responsive, y almacena información en LocalStorage, garantizando acceso a los datos sin conexión. 
                            `}
                        enlaceRepositorio="https://github.com/Ethan04Munoz/ExpenseTracker"
                        enlaceSitio="https://ethan04munoz.github.io/ExpenseTracker/"
                    />
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

export default Main;