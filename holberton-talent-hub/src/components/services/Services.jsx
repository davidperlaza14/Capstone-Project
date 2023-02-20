import React, { useState } from "react";
import styled from 'styled-components';

export const ServicesWrapper = styled.section`
.services__container {
  grid-template-columns: repeat(3, 270px);
  justify-content: center;
  column-gap: 1.8rem;
}

.services__content {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--container-color);
  padding: 6rem 0 2rem 2.5rem;
}

.services__icon {
  display: block;
  font-size: 2rem;
  color: var(--title-color);
  margin-bottom: var(--mb-1);
}

.services__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
}

.services__button {
  color: var(--title-color);
  font-size: var(--small-font-size);
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.services__button-icon {
  font-size: 1rem;
  transition: 0.3s;
}
.services__button:hover .services__button-icon {
  transform: translateX(00.25rem);
}

.services__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-modal);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.services__modal-content {
  width: 500px;
  position: relative;
  background-color: var(--container-color);
  padding: 4.5rem 2.5rem 2.5rem;
  border-radius: 1.5rem;
}

.services__modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--title-color);
  cursor: pointer;
}

.services__modal-title,
.services__modal-description {
  text-align: center;
}

.services__modal-tilte {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1);
}

.services__modal-description {
  font-size: var(--small-font-size);
  padding: 0 3.5rem;
  margin-bottom: var(--mb-2);
}

.services__modal-services {
  row-gap: 0.75rem;
}

.services__modal-service {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.services__modal-icon {
  color: var(--title-color);
  font-size: 1.1rem;
}

.services__modal-info {
  font-size: var(--small-font-size);
}`;

export const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <ServicesWrapper>
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer{" "}
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right  services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times  services__modal-close"
              ></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam nulla quidem nemo, numquam obcaecati nisi omnis ipsa,
                labore tempora totam quibusdam dicta! Quam vitae atque
                consequuntur nam eaque quia.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">Web page develop</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desing and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              {" "}
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right  services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times  services__modal-close"
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam nulla quidem nemo, numquam obcaecati nisi omnis ipsa,
                labore tempora totam quibusdam dicta! Quam vitae atque
                consequuntur nam eaque quia.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">Web page develop</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desing and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer{" "}
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            View More{" "}
            <i className="uil uil-arrow-right  services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times  services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quisquam nulla quidem nemo, numquam obcaecati nisi omnis ipsa,
                labore tempora totam quibusdam dicta! Quam vitae atque
                consequuntur nam eaque quia.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">Web page develop</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desing and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</ServicesWrapper>
  );
};
