import React from 'react';
import styled from "styled-components";
import { Works } from './Works';

export const WorkWrapper = styled.section`

`;

export const Work = () => {
  return (
    <WorkWrapper>
    <section className="work section" id='portfolio' >
      <h2 className="section__title">Portfolio</h2>
      <Works />
    </section>
    </WorkWrapper>
  )
}
