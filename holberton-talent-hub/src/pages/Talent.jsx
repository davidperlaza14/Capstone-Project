import { TalentOverview } from "../components/holbies/TalentOverview";

export const TalentPage = () => {
  /* const indexLoad = JSON.parse(localStorage.getItem('coderise-talent:index-load'));*/
  return (
    <>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <TalentOverview></TalentOverview>
        </div>
      </section>
    </>
  );
};
