import styled from 'styled-components';
import { ProjectItem } from '../components/project-item/ProjectItem';

export const ProjectsPageWrapper = styled.section`
  & main { 
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 20px;
  }
`;

export const ProjectsPage = () => {
  const projects = [{}, {}, {}];
  return (
    <>
      <ProjectsPageWrapper>
        <header>
          <input type="text" placeholder="Search" />
        </header>
        <main>
          {projects.map((project, key) => (
            <ProjectItem key={key} {...project} />
          ))}
        </main>
        <footer>
          <nav>
            <button type="button">first</button>
            <button type="button">prev</button>
            <input type="number" placeholder="1" />
            <button type="button"> next </button>
            <button type="button"> last</button>
          </nav>
        </footer>
      </ProjectsPageWrapper>
    </>
  );
};
