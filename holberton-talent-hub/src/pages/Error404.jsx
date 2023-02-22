import styled from 'styled-components';

/* A styled component. */

export const Error404PageWrapper = styled.section`
.ErrorText {
  color: white;
}
h1 {
  color: white;
}
`;

export const Error404Page = () => {
  return (
    <Error404PageWrapper>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <h1>404</h1>
          <p className="ErrorText">
            We're sorry, the page you're looking for is not available.
            It's possible that you've typed the address incorrectly or that the
            page has been deleted. Please check the address again or try
            searching for what you need on our homepage.{' '}
          </p>
          <div className="contenedor-img" />
        </div>
      </section>
    </Error404PageWrapper>
  );
};
