import React from 'react';
import styled from "styled-components";

/* A styled component. */

export const FrontendWrapper = styled.section`
.skills__contenct {
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem;
  border-radius: 1.25rem;
}

.skills__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  text-align: center;
  margin-bottom: var(--mb-1-5);
}

.skills__box {
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
}

.skills__group {
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
}

.skills__data {
  display: flex;
  column-gap: 0.5rem;
}

.skills .uil-check-circle {
  font-size: 1rem;
  color: var(--title-color);
}
.skills__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  line-height: 18px;
}

.skills__name:hover {
  color: #1cb698;
}

.skills__level {
  font-size: var(--tiny-font-size);
}

`;

/* A function that returns the HTML code. */

export const Frontend = () => {
  return (
    <FrontendWrapper>
    <div className='skills__contenct'>
      <h3 className='skills__title'>Frontend Developer</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>


        <div className='skills__group'>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>Bootstrap</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>Git</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
          <div className='skills__data'>
            <i class="uil uil-check-circle"></i>

            <div>
              <h3 className='skills__name'>React</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FrontendWrapper>
  )
}
