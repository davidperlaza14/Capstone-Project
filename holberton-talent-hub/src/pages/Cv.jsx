import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Services } from "../components/services/Services";
import { Qualification } from "../components/qualification/Qualification";
import { Work } from "../components/work/Work";
import { Contact } from "../components/contact/Contact";
import { Skills } from "../components/skills/Skills";

/* export const CvPage = ({ userId }) => { */

export const CvPage = () => {
  return (
    <>
      {/*<section id="inicio" className="inicio">*/}
      {/* {userId} ? ( 
        <h1>CV of {userId}</h1>*/}
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
      <Work />
      {/* ) : ( */}

      {/* ) */}
      {/*</section>*/}
    </>
  );
};
