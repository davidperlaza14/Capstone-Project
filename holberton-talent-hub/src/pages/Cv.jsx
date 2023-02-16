export const CvPage = ({ userId }) => {
  return (
    <>
      <section id="inicio" className="inicio">
        {userId ? (
          <div className="contenido-banner">
            <h1>CV of {userId}</h1>
            <p>
              Is an cv of {userId} designed by Coderise to facilitate the search for human talent with extensive management of tools used in
              Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to
            </p>
            <div className="contenedor-img" />
          </div>
        ) : (
          <div className="contenido-banner">
            <h1>CV</h1>
            <p>
              Is an application designed by Coderise to facilitate the search for human talent with extensive management of tools used in
              Software development and Soft Skills. Companies and recruiters interested in hiring staff for their work teams will be able to
            </p>
          </div>
        )}
      </section>
    </>
  );
};
