import styled from 'styled-components';
import { ProjectItem } from '../components/project-item/ProjectItem';

export const ProjectsPageWrapper = styled.section`
  & main { 
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 20px;
  }

  & .container-projects {
    background: #2D333D;
  }

  & .center-container {
    margin: 0px 5px;
    display: flex;
    justify-content: center;
    padding: 10px;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
  }

  & .margin-top {
    margin-top: 100px;
  }

  & .container-button {
    border: 1px solid blue;
  }

  & .input-search {
    margin-right: 35px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border-color: gray;
    border-style: double;
  
  }

  & .input-number {
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border-color: gray;
    border-style: double;
  }

  & .button-search {
    box-shadow: 6px 5px 12px 3px #000;
    padding: 10px 25px;
    background: #009dff;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
  }

  & .button-search:hover {
    background: #527e9a;
  }

  & .button-three {
    box-shadow: 6px 5px 12px 1px #009dff;
    padding: 10px 8px;
    margin: 0 15px;
    border: none;
    color: black;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  & .button-two {
    box-shadow: 6px 5px 16px 1px #312e2e;
    padding: 10px 8px;
    border: 2px solid #009dff;
    color: black;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
  }

`;

export const ProjectsPage = () => {
  const projects = [{}, {}, {}];
  return (
      <ProjectsPageWrapper>
      <div className="container-projects"> 
        <div className="center-container">
          <input className="input-search" type="text" placeholder="Search" />
          <button className="button-search" type="button">Search</button>
        </div>
        <main>
          {projects.map((project, key) => (
            <ProjectItem key={key} {...project} />
          ))}
        </main>
          <div className="center-container margin-top">
            <button className="button-three" type="button">first</button>
            <button className="button-two" type="button">prev</button>
            <input className="input-number" type="number" placeholder="1" />
            <button className="button-two" type="button"> next </button>
            <button className="button-three" type ="button"> last</button>
          </div>
      </div>
      </ProjectsPageWrapper>
  );
};
