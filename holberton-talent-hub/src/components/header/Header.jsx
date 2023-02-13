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
            <a href="#HOME" onClick="seleccionar()">
              HOME
            </a>
          </li>
          <li>
            <a href="#CV" onClick="seleccionar()">
              CV
            </a>
          </li>
          <li>
            <a href="#Projects" onClick="seleccionar()">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#Talent" onClick="seleccionar()">
              TALENT{' '}
            </a>
          </li>
          <li>
            <a href="#Team coderise" onClick="seleccionar()">
              TEAM CODERISE
            </a>
          </li>
          <li>
            <a href="#Contact" onClick="seleccionar()">
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
