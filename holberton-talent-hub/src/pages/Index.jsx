import styled from 'styled-components';
import fondo from '../images/fondo.jpg'



export const IndexWrapper = styled.section`

& {
  background: linear-gradient(to top, rgba(30, 35, 38, 0.8), rgba(30, 35, 38, 1)), url(${fondo});
    background-size: cover;
    height: 100vh;
    color: #e21c3d;
    display: flex;
    align-items: center;
    font-size: 20px;
}


*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}
body{
    background-color: #151320;
    
}
div{
    height: 450px;
    width: 450px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 5px;
    box-shadow: 0 20px 35px rgba(0,0,0,0.3);
    overflow: hidden;
}
div:before{
    content: "";
    height: 150%;
    width: 150%;
    position: absolute;
    background: conic-gradient(
        #fd004c,
        #fe9000,
        #fff020,
        #3edf4b,
        #3363ff,
        #b102b7,
        #fd004c
    );
    left: -25%;
    top: -25%;
    animation: spin 1.5s infinite linear;
}
@keyframes spin{
    100%{
        transform: rotate(-360deg);
    }
}


div:after{
    content: "Holberton";
    position: absolute;
    background-color: #1c1b29;
    height: 93%;
    width: 93%;
    top: 3.5%;
    left: 3.5%;
    border-radius: 5px;
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 6px;
    display: grid;
    place-items: center;

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

