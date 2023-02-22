import { ProjectOverview } from '../components/project-overview/ProjectOverview'

/**
 * The ProjectPage function returns a section element with an id of "inicio" and a class of "inicio"
 * and a child element of ProjectOverview
 * @returns A React component
 */

export const ProjectPage = () => {
  return (
    <>
      <section id="inicio" className="inicio">
        <ProjectOverview></ProjectOverview>
      </section>
    </>
  );
};
