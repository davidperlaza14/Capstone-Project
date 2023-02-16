/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';

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

export const TecnologyItem = ({ icon, name }) => (
  <TecnologyItemWrapper>
    <span>{name}</span>
    <i className={`devicon-${icon}-plain colored`}></i>
  </TecnologyItemWrapper>
);
