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
            <a href="/" onClick="seleccionar()">
              HOME
            </a>
          </li>
          <li>
            <a href="/cv" onClick="seleccionar()">
              CV
            </a>
          </li>
          <li>
            <a href="/projects" onClick="seleccionar()">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/talent" onClick="seleccionar()">
              TALENT{' '}
            </a>
          </li>
          <li>
            <a href="/team coderise" onClick="seleccionar()">
              TEAM CODERISE
            </a>
          </li>
          <li>
            <a href="/contact" onClick="seleccionar()">
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
