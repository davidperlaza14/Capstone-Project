import React from "react";
import styled from 'styled-components';

export const WorkItemsWrapper = styled.section`
.work__card {
  background-color: var(--container-color);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  border-radius: 1rem;
}

.work__img {
  width: 295px;
  border-radius: 1rem;
  margin-bottom: var(--mb-1);
}

.work__title {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: var(--mb-0-5);
} 

.work__button {
  color: var(--text-color);
  font-size: 20px;
  font-weight: 100;
  font-variant: all-small-caps;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
}

.work__button-icon {
  font-size: 1rem;
  transition: 0.4s;
}

.work__button:hover .work__button-icon {
  transform: translateX(00.25rem);
}`;

export const WorkItems = ({ item }) => {
  return (
    <WorkItemsWrapper>
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
    </WorkItemsWrapper>
  );
};