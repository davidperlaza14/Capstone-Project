import styled from 'styled-components';

export const ProjectItemWrapper = styled.section`

  & {
    background: #2D333D;
    margin: auto;
    padding: 0 20px;
    display: grid;
    grid-template: 'figure header' 3.5rem 'figure main' 1fr / calc(10rem + 12vw) 1fr;
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px inset #8beeee70, 0 6.5rem 0 0 inset rgb(9 129 119);
    border-radius: 20px;
  }

  & figure {
    grid-area: figure;
    margin: 0;
    padding: 0;
    display: grid;
    position: relative;
  }

  & figure > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  & .talent-container {
    display: flex;
    justify-content: center;
    margin-block-start: 4rem;
  }

  & header h1 {
    text-align: center;
    color: white;
    font-size: 30px;
  }

  & main p {
    color: white;
    font-size: 20px;
  }

  & .talent-container > * { 
    transform: scale(.80);
    font-size: 20px;
  }

  & .talent-container img {
    font-size: 20px;
  }


  &:hover {
    box-shadow: 0px 0px 0px 1px inset #8beeee, 0 6.5rem 0 0 inset rgb(9 129 119);
  }`;

