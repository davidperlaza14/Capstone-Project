import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  & {
    background: #1e2326;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px calc(10px + 10vw);
  }

  & .logo a {
    font-family: 'Inconsolata', monospace;
    font-size: 36px;
    color: #1cb698;
    text-decoration: none;
  }

  & ul {
    display: flex;
    list-style: none;
  }

  & nav ul li a {
    text-align: none;
    color: #ffff;
    margin: 0 15px;
    padding: 3px;
    transition: 0.5s;
    text-decoration: none;
    white-space: nowrap;
  }

  & nav ul li a:hover {
    color: #1cb698;
  }

  .nav-responsive {
    background-color: #1cb698;
    color: #ffff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  }
`;
