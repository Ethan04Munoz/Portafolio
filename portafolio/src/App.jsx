import React from "react";
import { Parallax } from "react-parallax";
import Header from "./componentes/Header";
import './App.css'
import ContenidoParallax from "./componentes/ContenidoParallax";

function App() {
    return (
        <div className="App">
            <div className="contenerSitio">
                <Header />
                <div className="contenedorTextoCentral">
                    <h1>Websites. Webapps. Soluciones web.</h1>
                </div>
                <Parallax
                    blur={30}
                    bgImage={'img/test/test (3).webp'}
                    bgImageAlt="Buscaminas"
                    strength={-800}
                >
                    <ContenidoParallax titulo="Buscaminas" texto="Un buscaminas" />
                    <div style={{ height: '500px' }} />
                </Parallax>
                <Parallax
                    blur={30}
                    bgImage={'img/test/test (2).webp'}
                    bgImageAlt="Expense Tracker"
                    strength={-800}
                >
                    <ContenidoParallax titulo="Expense tracker" texto="Un buscaminas" />
                    <div style={{ height: '500px' }} />
                </Parallax>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
        </div>
    );
}

export default App;