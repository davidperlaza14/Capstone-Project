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
      <section id="inicio" className="inicio">
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
        <h1>CV</h1>
        <p>
          Is an application designed by Coderise to facilitate the search for human talent with extensive management of tools used in
          Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to
        </p>
        {/* ) */}
      </section>
    </>
  );
};
