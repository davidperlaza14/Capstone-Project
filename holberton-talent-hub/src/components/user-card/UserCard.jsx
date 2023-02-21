/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';
import { TecnologyItem } from '../tecnology-item/TecnologyItem';

export const UserCardWrapper = styled.article`
  & {
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-shadow: 0 6.5rem 0 0 inset rgb(9 129 119 / 100%);
    padding: 20px;
    border: 1px solid black;
    background-color: #1e2326;
    color: white;
    font-family: 'Inconsolata', 'Sans serif';
    font-size: 18px;
    border-radius: 20px;
    line-height: 20px;
    text-align: justify;
    flex-grow: 1;
  }

  & header {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
  }

  & header figure {
    width: 2rem;
    position: relative;
  }

  & header figure img {
    top: 0;
    left: 0;
    width: 8rem;
    height: 8rem;
    transform: translate(-50%, -50%);
    position: absolute;
    box-shadow: 0 3px 0px 10px rgb(9 129 119 / 100%);
    border-radius: 50%;
  }
  & header h2 {
    font-size: 1.5rem;
    margin-inline : 0;
    padding: 0;
    white-space: nowrap;
  }
  & main ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: unset;
    list-style: none;
    width: 35%;
    padding-inline-start: 1rem;
    margin: auto;
    gap: 10px;
  }

`;

export const UserCard = ({ img, name, description, tecnologies }) => (
  <UserCardWrapper>
    <header>
      <figure>
        <img {...img} className="talent-img" />
      </figure>
      <h2>{name}</h2>
    </header>
    {description && tecnologies && (
      <main>
        {typeof description === 'string' && <p>{description}</p>}
        {Array.isArray(tecnologies) && (
          <ul>
            {tecnologies.map((tecnology, key) => (
              <TecnologyItem key={key} {...tecnology} />
            ))}
          </ul>
        )}
      </main>
    )}
  </UserCardWrapper>
);