export const TalentPage = () => {
  const indexLoad = JSON.parse(localStorage.getItem('coderise-talent:index-load'));
  return (
    <>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <h1>TALET </h1>

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
