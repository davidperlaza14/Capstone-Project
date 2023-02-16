import styled from 'styled-components';

export const ProjectItemWrapper = styled.section`
  & {
    background: #2d333d;
    margin: auto;
    padding: 0 10px;
    display: grid;
    grid-template: 'figure header' 3.5rem 'figure main' 1fr / calc(10rem + 12vw) 1fr;
    gap: 20px;
    cursor: pointer;
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
  & .talent-container > * { 
    transform: scale(.75);

  }
`;

/*   & .job-container {
    padding: 20px;
    background-color: #2D333D;
    max-width: 100%;
    margin: auto;
    text-align: center;
    color: white;
  }

  & h1 {
    align: center;
    color: #8beeee;
    font-size: 40px;
  }

  & .job-container p {
    align: center;
    color: #white;
    font-size: 20px;
  }

  & .talent-container {
    margin: auto;
    max-width: 90%;
    gap: 3rem;
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 20px;
    justify-content: space-around;
    text-align: center;
  }

  & .UserTalent.description p {
    background-color: #515151;
  } */
