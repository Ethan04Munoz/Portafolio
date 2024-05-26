import React from "react";
import Header from "./componentes/Header";
import Parallax from "./componentes/Parallax";
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
                    backgroundImage={'img/webp/buscaminas.webp'}
                    strength={0.8}
                >
                    <ContenidoParallax
                        titulo="Buscaminas"
                        texto={`Un emocionante buscaminas con una interfaz dinámica construida con React. 
                        Fusiona desafío, estilo y rendimiento con animaciones CSS cautivadoras, almacenamiento de récords en localStorage,
                         Web Workers para un juego fluido y una experiencia configurable y responsive.`}
                    />
                    <div style={{ height: '500px', borderRadius: '1rem 0 1rem 0' }} />
                </Parallax>
                <Parallax
                    backgroundImage={'img/webp/expenseTracker.webp'}
                    strength={0.8}
                >
                    <ContenidoParallax 
                        titulo="Expense tracker" 
                        texto={`Un sofisticado gestor de gastos e ingresos creado con React que simplifica el control financiero. 
                        Permite registrar transacciones con facilidad, marcar entradas como recurrentes para un seguimiento automático mensual. 
                        Ofrece notificaciones visuales atractivas con toast y vistas analíticas claras con gráficos claros.`}
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

export default App;