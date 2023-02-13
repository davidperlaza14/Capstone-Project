import { FooterWrapper } from "./Footer.styles";
import logoHb from "../../images/logohb.fw.png"

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="redes"><img src={logoHb} className="logo" alt="Logo" /></div>
    </FooterWrapper>
  );
};
