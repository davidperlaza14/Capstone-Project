import { useState } from 'react';
import styled from 'styled-components';
import { Search, KeyboardArrowUp } from '@mui/icons-material/';

import { ProjectItem } from '../components/project-item/ProjectItem';

export const ProjectsPageWrapper = styled.section`
  & main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 20px;
  }

  & main {
    padding-block-start: 80px;
  }

  & .container-projects {
    background: #2d333d;
  }

  & .center-container {
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
    align-items: center;
    position: fixed;
    width: 100%;
    background: #2d333d;
    z-index: 1;
    height: 85px;
    transition: all 0.5s;
    box-shadow: 0px 0px 0px 1px #8beeee;
  }
  .center-container-footer {
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100%;
    background: #2d333d;
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
    font-size: 20px;
  }

  & .input-number {
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    border-color: gray;
    border-style: double;
  }

  & .button-search {
    box-shadow: 2px 2px #000;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    color: white;
    height: 40px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    background: #098177;
  }

  & .button-search:hover {
    background: #064f49;
  }

  & .button-activation-search {
    position: absolute;
    right: 20px;
    transition: all 0.5s;
    box-shadow: 2px 2px #000;
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 20px;
    border-radius: 6px;
    background: #098177;
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

export const ProjectsPage = () => {
  const [show, setShow] = useState(false);
  const projects = [{}, {}, {}];
  return (
    <ProjectsPageWrapper>
      <div className="container-projects">
        <div className="center-container" style={{ top: show ? '80px' : '0px' }}>
          <input className="input-search" type="text" placeholder="Search" />
          <button className="button-search" type="button">
            Search
          </button>
          <button
            className="button-activation-search"
            type="button"
            style={{ top: show ? '25px' : 'calc(100% + 20px)' }}
            onClick={() => setShow(!show)}
          >
            {show ? <KeyboardArrowUp /> : <Search />}
          </button>
        </div>
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
