import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/holberton.jpeg")}
        alt="foto de holberton"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}
          Base de datos innovadora donde encontraras el mejor talento TI
        </p>
        <p className="texto-testimonio">
          "La formación en Holberton brinda a sus estudiantes las herramientas y
          el conocimiento para convertirse en expertos en tecnología y aplicar
          su talento en proyectos innovadores."
        </p>
        <p className="texto-testimonio">
          "El talento y la pasión de los estudiantes de Holberton por la
          tecnología les permite abordar desafíos complejos y encontrar
          soluciones creativas y efectivas."
        </p>
        <p className="texto-testimonio">
          "El aprendizaje práctico enfocado en proyectos es una parte clave del
          programa de Holberton, lo que permite a los estudiantes desarrollar y
          aplicar sus talentos en situaciones reales."
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
