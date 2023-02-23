import { linkToInAnchor } from '../../core/router/linkTo';
import { HeaderWrapper } from './Header.styles';

/**
 * It returns a header with a logo, a navbar and a responsive navbar
 * @returns A React component
 */

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <a href="#">//Coderise</a>
      </div>
      <nav id="nav">
        <ul>
          <li>
            <a href="/" onClick={linkToInAnchor()}>
              HOME
            </a>
          </li>
          <li>
            <a href="/projects" onClick={linkToInAnchor()}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/talent" onClick={linkToInAnchor()}>
              TALENT
            </a>
          </li>
          <li>
            <a href="/cv" onClick={linkToInAnchor({ userId: 19732 })}>
              CV
            </a>
          </li>
          <li>
            {/* <a href="/team coderise" onClick="seleccionar()">
              TEAM CODERISE
            </a> */}
          </li>
          <li>
            {/* <a href="/contact" onClick="seleccionar()">
              CONTACT
            </a> */}
          </li>
        </ul>
      </nav>
      <div className="nav-responsive" onClick="mostrarOcultarMenu()">
        <i className="fa-solid fa-bars"></i>
      </div>
    </HeaderWrapper>
  );
};
