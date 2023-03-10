import styled from 'styled-components';

/* A styled component. */

export const FooterWrapper = styled.footer`
  & {
    background-color: #1e2326;
    color: #fff;
    padding: 50px 0 30px 0;
    text-align: center;
    position: relative;
    width: 100%;
  }

  & .footer .redes {
    margin-bottom: 20px;
  }

  & .redes img {
    width: 150px;
  }

  & .footer .redes a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 100%;
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin: 40px 5px;
    font-size: 20px;
    transition: 0.3s;
  }

  & .redes a:hover {
    background: #1cb698;
  }

  & .arriba {
    display: block;
    width: 50px;
    height: 50px;
    background-color: #1cb698;
    color: #fff;
    position: absolute;
    left: 48%;
    transform: translateX(-50);
    top: 0px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 20px;
  }
`;
