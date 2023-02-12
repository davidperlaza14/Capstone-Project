import "../hojas-de-estilo/Testimonio.css";
import { FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Testimonio(props) {
  return (
    
    <div className="contenedor-testimonio">
      <img
        className="imagen-david"
        src={require(`../imagenes/david-${props.imagen}.jpg`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre">
          <strong>{props.nombre}</strong>{" "}
        </p>
        <p className="lenguaje-Py">
          <strong>{props.lenguaje}</strong>
        </p>
        <p className="Django-fremw">
          {" "}
          <strong>Django</strong>
        </p>

        <p className="texto-aboutme">{props.aboutme} </p>
      </div>

      <div className="bnt">
        <button type="button" className="btn btn-primary">
          Python
        </button>
        <button type="button" className="btn btn-secondary">
          Django
        </button>
        <button type="button" className="btn btn-success">
          Flask
        </button>
        <button type="button" className="btn btn-danger">
          SQL
        </button>
        <button type="button" className="btn btn-warning">
          RestAPI
        </button>
      </div>
      
        {/* <FontAwesomeIcon icon = {faGithub,}/> */}
    </div>
  );
}

export default Testimonio;
