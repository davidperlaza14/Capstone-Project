/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';

/* It's a function that takes in an icon and a name and returns a div with a span and an i tag */

export const TecnologyItemWrapper = styled.li`
  & {
    width: 40%;
    display: flex;
    justify-content: space-between;
    
  }
  i {
    margin-inline-end: 1rem;
    
  }
`;

/**
 * It's a function that takes in an icon and a name and returns a div with a span and an i tag
 */

export const TecnologyItem = ({ icon, name }) => (
  <TecnologyItemWrapper>
    <span>{name}</span>
    <i className={`devicon-${icon}-plain colored`}></i>
  </TecnologyItemWrapper>
);
