import React from "react";
import styled from "styled-components";

/* A styled component. */

export const SocialWrapper = styled.section`
.home__social {
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
}

.home__social-icon {
  font-size: 1.25rem;
  color: var(--title-color);
}

.home__social-icon:hover {
  color: #1cb698;
}`;

/**
 * It returns a div with a class of home__social, which contains three links to my social media
 * profiles
 * @returns A component that contains a div with a class of home__social and inside of it there are
 * three links that contain icons from the uil library.
 */

export const Social = () => {
  return (
    <SocialWrapper>
      <div className="home__social">
        <a href="https://www.linkedin.com/in/david-stiven-perlaza-valencia/" className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/davidperlaza14" className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-github"></i>
        </a>

        <a href="https://twitter.com/Perlazadavid14" className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-twitter"></i>
        </a>

      </div>
    </SocialWrapper>
  )
};

