import styled from 'styled-components';
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Qualification } from "../components/qualification/Qualification";
import { Work } from "../components/work/Work";
import { Contact } from "../components/contact/Contact";
import { Skills } from "../components/skills/Skills";

/* export const CvPage = ({ userId }) => { */
export const CvPageWrapper = styled.section`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body,
button,
input,
textarea {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: #fff;
}

body {
  /* background-color: var(--body-color); */
  color: white;
  /*color: var(--text-color);*/
  /* color: #fff; */
  
}

h1, h2, h3 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  /* color: #fff; */

}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* ========== REUSABLE CSS CLASSES ========== */
.section {
  padding: 6rem 0 2rem;
}

.section__title {
  font-size: var(--h1-font-size);
  color: var(--title-color);
  /* color: #1CB698; */

}

.section__subtitle {
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: 4rem;
  /* color: #1CB698; */
}

.section__title,
.section__subtitle {
  text-align: center;
}

/* ========== LAYOUT ========== */
.container {
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

/* ========== BUTTONS ========== */
.button {
  display: inline-block;
  background-color: var(--title-color);
  color: var(--container-color);
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: var(--font-medium);
  background-color: #098177;
  color: white;
}

.button:hover {
  background-color: var(--title-color-dark);
  background-color: #064f49;
}

.button__icon {
  margin-left: var(--mb-0-5);
  color: white;
}

.button--flex {
  display: inline-flex;
  align-items: center;
}

/* ========== BREAKPOINTS ========== */
/* For lage devices */
@media screen and (max-width: 992px) {
  .container {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .button {
    padding: 1rem 1.75rem;
  }

  .button__icon {
    width: 22px;
    height: 22px;
  }
}

/* For medium devices */
@media screen and (max-width: 768px) {
  body {
    margin: 0 0 var(--header-height) 0;
  }
  
  .section {
    padding: 2rem 0 4rem;
  }

  .section__subtitle {
    margin-bottom: var(--mb-3);
  }
}
/* For medium devices */
@media screen and (max-width: 576px) {
}

/* For small devices */
@media screen and (max-width: 350px) {
  :root {
    --big-font-size: 2.25rem;
  }
  .container {
    margin-left: var(--mb-1-);
    margin-right: var(--mb-1-);
  }
}
`;



export const CvPage = () => {
  return (
    <>
      <CvPageWrapper>
        <section id="inicio" className="inicio">
          {/* {userId} ? ( 
        <h1>CV of {userId}</h1>*/}
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Work />
          <Contact />
          {/* ) : ( */}

          {/* ) */}
        </section>
      </CvPageWrapper>
    </>
  );
};
