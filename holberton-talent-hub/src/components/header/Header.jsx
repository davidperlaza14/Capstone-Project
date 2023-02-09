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
            <a href="#inicio" onclick="seleccionar()">
              HOME
            </a>
          </li>
          <li>
            <a href="#sobremi" onclick="seleccionar()">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#skills" onclick="seleccionar()">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#curriculum" onclick="seleccionar()">
              OUR HOLBIES{' '}
            </a>
          </li>
          <li>
            <a href="#portfolio" onclick="seleccionar()">
              TEAM CODERISE
            </a>
          </li>
          <li>
            <a href="#contacto" onclick="seleccionar()">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-responsive" onclick="mostrarOcultarMenu()">
        <i className="fa-solid fa-bars"></i>
      </div>
    </HeaderWrapper>
  );
};
