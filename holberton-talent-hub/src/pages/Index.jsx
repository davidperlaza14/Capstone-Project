import styled from 'styled-components';
import fondo from '../images/fondo.jpg';

export const TitleIndex = styled.section`
& .main-title {
 
  align-items: center;
  max-height: 0px;
  text-align: center;
	font-family: Inconsolata;
	color: #e1003c;
  font-size: 30px;
  -webkit-text-stroke: 0.2px #fff;
}
`;

/* A CSS code that is used to style the page. */



export const IndexWrapper = styled.section`

& {
background: linear-gradient(to top, rgba(30, 35, 38, 0.6), rgba(30, 35, 38, 0.8)), url(${fondo});
  background-size: 100%;
  background-position: top;
  height: 100vh;
  color: #e1003c;
  display: flex;
  align-items: flex-start;
  font-size: 20px;
}

/* The above code is a CSS code that is used to style the page. */


 .banner-container {
	margin:0;
	padding:0;
	box-sizing: border-box;
  text-align: center;
}

.div-banner {
  display: flex;
	position: relative;
	margin:3% auto 0;
	width: 70%;
	height: 120px;
	background: linear-gradient(90deg, #000, #1e2326);
  box-shadow: 0px 0px 0px 1px inset #8beeee70, 0 6.5rem 0 0 inset #1e2326;
  border-radius: 20px;
  align-items: center;
}

.description-text {
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.banner-container:before, .banner-container:after {
	content: '';
	position: absolute;
	left: -8px;
	top: -8px; 
	background: linear-gradient(120deg,
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
	background-size: 200%;	
	width: calc(100% + 16px); 
	height: calc(100% + 16px);
	z-index: -1;
	animation: BGgradient 30s ease infinite;
}

@keyframes BGgradient {
	0% {
		background-position: 0% 200%;
	}
	50% {
		background-position: 200% 0%;
	}
	100% {
		background-position: 0% 330%;
	}
}

.banner-container:after {
	filter: brightness(1.4);
	filter: drop-shadow(16px 16px 20px rgb(248, 220, 97));
	filter: blur(15px);	
}
`;

export const IndexPage = () => {
  localStorage.setItem('coderise-talent:index-load', true);
  return (
    <>
      <TitleIndex>
        <div className='main-title'><h1>Holberton Talent Hub</h1></div>
      </TitleIndex>
      <IndexWrapper>
        <section className="banner-container">
          <div className="div-banner animate-bg">
            {/*<h1>Holberton talent hub</h1>*/}
            <p className="description-text">
              Is an application designed by Coderise to facilitate the search for human talent with extensive management of tools used in
              Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to
              find the ideal staff in this application.{' '}
            </p>
            {/*<div className="contenedor-img" />*/}
          </div></section>
      </IndexWrapper>
    </>
  );
};

