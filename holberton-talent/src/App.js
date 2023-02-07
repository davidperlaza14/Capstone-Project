import './App.css';
import Testimonio from './componentes/Testimonio';
import { Landing } from './componentes/Landing';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Holberton talent</h1>
        <Testimonio />
        <Landing></Landing>
      </div>
    </div>
  );
}

export default App;
