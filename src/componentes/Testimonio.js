import React from "react";
import "../hojas-de-estilo/testimonio.css";


function Testimonio({ objUsuario }) {

    const { imag, nombre, cargo, testimonio, pais } = objUsuario;

    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../imagenes/${imag}`)} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{nombre}</strong> en {pais}</p>
                <p className="cargo-testimonio">{cargo}</p>
                <p className="texto-testimonio">{testimonio}</p>
            </div>
        </div >
    );
}

export default Testimonio;
