import styled from 'styled-components';
import fondo from '../images/fondo.jpg'

export const TitleIndex = styled.section`
& .main-title {
	text-align: center;
	font-family: Inconsolata;
	color: #821410;
  font-size: 30px;
}
`;

export const IndexWrapper = styled.section`
& {
  background: linear-gradient(to top, rgba(30, 35, 38, 0.6), rgba(30, 35, 38, 0.8)), url(${fondo});
  background-size: 100%;
  background-position: top;
  height: 100vh;
  color: #821410;
  display: flex;
  align-items: flex-start;
  font-size: 20px;
}

*,
*:before,
*:after{
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #151320;
}
div{
    height: 280px;
    width: fit-content;
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
        #098176,
        #2a8c82,
        #cacaca,
        #ffffff,
        #1c1c1c,
        #000000,
        #333333,
		    #e4e4e4,
		    #7dd9c4
    );
    left: -25%;
    top: -25%;
    animation: spin 15s infinite linear;
}
@keyframes spin{
    100%{
        transform: rotate(-360deg);
    }
}
div:after{
	content: "Is an application designed by Coderise to facilitate the search for human talent with extensive management of tools used in Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to find the ideal staff in this application.";
  position: absolute;
  background-color: #1c1b29;
  height: 96%;
  width: 96%;
  top: 2%;
  left: 2%;
  border-radius: 5px;
  font-family: 'Poppins',sans-serif;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 1px;
  display: grid;
  place-items: center;
	text-align: center;
  line-height: 1.5;
}`;

export const IndexPage = () => {
  localStorage.setItem('coderise-talent:index-load', true);
  return (
    <>
      <TitleIndex>
        <div className='main-title'><h1>Holberton Talent Hub</h1></div>
      </TitleIndex>
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
    </>
  );
};

