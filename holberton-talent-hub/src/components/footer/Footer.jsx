import { FooterWrapper } from "./Footer.styles";
import logoHolberton from "../../images/hbtnbycd_logo.fw.png"

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="redes"><img src={logoHolberton} className="logo" alt="Logo" /></div>
    </FooterWrapper>
  );
};
