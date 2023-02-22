import { FooterWrapper } from "./Footer.styles";
import logoHb from "../../images/logohb.fw.png"

/**
 * The Footer function returns a FooterWrapper div with a div with a class of redes and an img with a
 * class of logo
 * @returns A Footer component with a div with a class of redes and an img with a class of logo.
 */

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="redes"><img src={logoHb} className="logo" alt="Logo" /></div>
    </FooterWrapper>
  );
};
