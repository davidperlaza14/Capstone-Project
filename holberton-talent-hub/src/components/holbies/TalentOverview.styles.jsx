import styled from 'styled-components';

export const SlideWrapper = styled.section`
  & {
    background: #2D333D;
    margin: auto;
    padding: 0 10px;
  }

  & .job-container {
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
    /*border: 1px solid black;*/
    gap: 3rem;
    /*background: #515151;*/
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 20px;
    justify-content: space-around;
    text-align: center;
  }

`;
