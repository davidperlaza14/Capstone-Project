import React from 'react';
import styled from 'styled-components';
import { Frontend } from './Frontend';
import { Backend } from './Backend';

export const SkillWrapper = styled.section`
.skills__container {
  grid-template-columns: repeat(2, 350px);
  column-gap: 3rem;
  justify-content: center;
}`;

export const Skills = () => {
  return (
    <SkillWrapper>
    <section className='skills section' id='skills'>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className='skills__container container grid'>
        <Frontend />

        <Backend />
      </div>

    </section>
    </SkillWrapper>
  )
};
