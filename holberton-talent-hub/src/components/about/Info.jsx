import React from 'react'
import styled from "styled-components";

export const InfoWrapper = styled.section`
.about__info {
  grid-template-columns: repeat(3, 140px);
  gap: 0.5rem;
  margin-bottom: var(--mb-2);
}
.about__box {
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  text-align: center;
  padding: 1rem 1.25rem;
  background: #fff;
}

.about__icon {
  font-size: 1.rem;
  color: var(--title-color);
  margin-bottom: var(--mb-0-5);
}

.about__title {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  color: #131515;
}

.about__subtitle {
  font-size: var(--tiny-font-size);
}`;

export const Info = () => {
  return (
<InfoWrapper>
    <div className='about__info grid'>
      <div className='about__box'>
        <i class="uil uil-award-alt about__icon"></i>

        <h3 className='about__title'>Python</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

      <div className='about__box'>
        <i class="uil uil-briefcase-alt about__icon"></i>
        <h3 className='about__title'>Django</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

      <div className='about__box'>
        <i class="uil uil-headphones about__icon"></i>
        <h3 className='about__title'>Flask</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

    </div>
    </InfoWrapper>
  )
}
