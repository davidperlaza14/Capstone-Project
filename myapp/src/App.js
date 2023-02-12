import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <h1>Talento Holbie</h1>
      <div className="contenedor-principal">
        <Testimonio
          nombre="David Stiven"
          desarrollador="Back-End"
          imagen="stiven"
          lenguaje="Python"
          fremword="Django"
          aboutme="Starting a career in software development, with 2000+ hours of hand on code experience and 6+ months of experience tutoring, and helping building the company's web app."
        />
          <br />
        <Testimonio
          nombre="David Stiven"
          desarrollador="Back-End"
          imagen="stiven"
          lenguaje="Python"
          fremword="Django"
          aboutme="Starting a career in software development, with 2000+ hours of hand on code experience and 6+ months of experience tutoring, and helping building the company's web app."
        />

<Testimonio
          nombre="David Stiven"
          desarrollador="Back-End"
          imagen="stiven"
          lenguaje="Python"
          fremword="Django"
          aboutme="Starting a career in software development, with 2000+ hours of hand on code experience and 6+ months of experience tutoring, and helping building the company's web app."
        />
      </div>
    </div>
  );
}

export default App;
