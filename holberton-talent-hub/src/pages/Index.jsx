import styled from 'styled-components';

export const IndexWrapper = styled.section`
  & {
    background: linear-gradient(to top, rgba(30, 35, 38, 0.8), rgba(30, 35, 38, 1)), url(../images/fondo.JPG);
    background-size: cover;
    height: 100vh;
    color: #e21c3d;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  & .contenido-banner {
    padding: 20px;
    background-color: #1e2326;
    max-width: 350px;
    margin: auto;
    text-align: center;
    border-radius: 40px;
  }

  & .contenido-banner p {
    color: #fff;
  }

  & .contenido-banner img {
    margin-top: 10px;
    border: 10px solid #1cb698;
    display: block;
    width: 45%;
    margin: auto;
    border-radius: 100%;
  }

  & .contenido-banner h1 {
    font-size: 28px;
    font-family: 'Inconsolata', monospace;
  }

  & .contenido-banner h2 {
    font-size: 15px;
    font-weight: normal;
  }

  & .contenido-banner .redes a {
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

  & .contenido-banner .redes a:hover {
    background-color: #1cb698;
  }
`;

export const IndexPage = () => {
  localStorage.setItem('coderise-talent:index-load', true);
  return (
    <IndexWrapper>
      <div className="contenido-banner">
        <h1>Holberton talent hub</h1>
        <p>
          Is an application designed by Coderise to facilitate the search for human talent with extensive management of tools used in
          Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to
          find the ideal staff in this application.{' '}
        </p>
        <div className="contenedor-img" />
      </div>
    </IndexWrapper>
  );
};
