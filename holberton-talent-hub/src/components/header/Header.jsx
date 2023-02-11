import { HeaderWrapper } from './Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <a href="#">//Coderise</a>
      </div>
      <nav id="nav">
        <ul>
          <li>
            <a href="#inicio" onClick="seleccionar()">
              HOME
            </a>
          </li>
          <li>
            <a href="#sobremi" onClick="seleccionar()">
              CV
            </a>
          </li>
          <li>
            <a href="#skills" onClick="seleccionar()">
              PROYECTS
            </a>
          </li>
          <li>
            <a href="#curriculum" onClick="seleccionar()">
              TALENT{' '}
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick="seleccionar()">
              TEAM CODERISE
            </a>
          </li>
          <li>
            <a href="#contacto" onClick="seleccionar()">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-responsive" onClick="mostrarOcultarMenu()">
        <i className="fa-solid fa-bars"></i>
      </div>
    </HeaderWrapper>
  );
};
