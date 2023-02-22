import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import { WorkItems } from "./WorkItems";

export const WorksWrapper = styled.section`
.work__filters {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: var(--mb-2);
}

.work__item {
  cursor: pointer;
  color: var(--title-color);
  padding: 0.25rem 0.75rem;
  font-weight: var(--font-medium);
  border-radius: 0.5rem;
  text-transform: capitalize;
}
.work__item:hover {
  background-color: var(--title-color);
  color: var(--container-color);
}

.work__container {
  grid-template-columns: repeat(2, max-content);
  gap: 3rem;
  justify-content: center;
}`;

/* A function that is being exported. */

export const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent});
    setActive(index);
  };
  return (
  <WorksWrapper>
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? 'active-work' : '' } work__item`}key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
</WorksWrapper>
  );
};