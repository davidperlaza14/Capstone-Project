import styled from 'styled-components';
import { ProjectItem } from '../components/project-item/ProjectItem';
import { SearchBar } from '../components/search-bar/SearchBar';

/* A styled component. */

export const ProjectsPageWrapper = styled.section`
  & main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-inline: auto;
    padding-block-start: 80px;
    max-width: 90%;
  }

  .center-container-footer {
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100%;
    z-index: 1;
  }

  & .margin-top {
    margin-top: 100px;
  }

  & .container-button {
    border: 1px solid blue;
  }

  & .input-number {
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border-color: gray;
    border-style: double;
  }

  & .button-three {
    border: 2px solid #000;
    padding: 10px 8px;
    margin: 0 15px;
    color: #064f49;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    cursor: pointer;
  }

  & .button-three:hover {
    background: #064f49;
    color: white;
  }

  & .button-two {
    padding: 10px 8px;
    border: 2px solid #000;
    color: #064f49;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    margin: 0 10px;
    cursor: pointer;
  }

  & .button-two:hover {
    background: #064f49;
    color: white;
  }
`;

/* A React component. */

export const ProjectsPage = () => {
<<<<<<< HEAD
  const [show, setShow] = useState(false);
  const projects = [{}, {}, {}, {}];
=======
  const projects = [{}, {}, {}];
>>>>>>> f311d700cc470edd0999e1f8ff096533ca1d7c30
  return (
    <ProjectsPageWrapper>
      <div className="container-projects">
        <SearchBar />
        <main>
          {projects.map((project, key) => (
            <ProjectItem key={key} {...project} />
          ))}
        </main>
        <div className="center-container-footer margin-top">
          <button className="button-three" type="button">
            first
          </button>
          <button className="button-two" type="button">
            prev
          </button>
          <input className="input-number" type="number" placeholder="1" />
          <button className="button-two" type="button">
            {' '}
            next{' '}
          </button>
          <button className="button-three" type="button">
            {' '}
            last
          </button>
        </div>
      </div>
    </ProjectsPageWrapper>
  );
};
