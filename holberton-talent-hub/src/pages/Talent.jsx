import { Holbies } from '../components/holbies/Holbies';

export const TalentPage = () => {
  const indexLoad = JSON.parse(localStorage.getItem('coderise-talent:index-load'));
  return (
    <>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <h1>TALENT </h1>
<Holbies/>
          {indexLoad ? (
            <p>Like you read in our home page, we are a team of developers and designers who are passionate about technology and we are</p>
          ) : (
            <p>we are a team of developers and designers who are passionate about technology and we are</p>
          )}
          <div className="contenedor-img" />
        </div>
      </section>
    </>
  );
};
