import React from "react";
import "../hojas-de-estilo/Landing.css";

export function Landing() {
    return (
        <div className="landing-container">
            <h4>Formulario de registro</h4>
            <input className="controls" type="text" name="nombre" id="nombres" placeholder="Ingrese su nombre o empresa"/>
            <input className="controls" type="number" name="numero" id="numeros" placeholder="Ingrese su telefono"/>
            <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su correo"/>
            <input className="controls" type="password" name="correo" id="correo" placeholder="Ingrese su contraseña"/>
            <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</a></p>
            <input className="botons" type="submit" value="Registrar"/>
            <p><a href="#">Ya tengo cuenta</a></p>
        </div>
    )
}