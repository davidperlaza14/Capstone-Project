/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';
import { TecnologyItem } from '../tecnology-item/TecnologyItem';

export const UserCardWrapper = styled.article`
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    box-shadow: 0 6.5rem 0 0 inset rgb(9 129 119 / 100%);
    max-width: 400px;
    padding: 20px;
    border: 1px solid black;
    background-color: #e4e4e4;
    color: black;
    font-family: 'Inconsolata';
    font-weight: bold;
    border-radius: 20px;
    line-height: 20px;
    text-align: center;
    flex-grow: 1;
  }

  & header {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
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
  & main ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    width: 80%;
    padding-inline-start: 2.5rem;
    margin: auto;
    gap: 20px;

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
    <main>
      <p>{description}</p>
      <ul>
        {tecnologies.map((tecnology, key) => (
          <TecnologyItem key={key} {...tecnology} />
        ))}
      </ul>
    </main>
  </UserCardWrapper>
);
