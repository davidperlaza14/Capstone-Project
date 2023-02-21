import React from "react";
import styled from 'styled-components';
import { Social } from "./Social";
import { Data } from "./Data";
import { ScrollDown } from "./ScrollDown";
import David from '../../assets/David.jpg';

export const HomeWrapper = styled.section`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home__container {
row-gap: 7rem;
}

.home__contect {
grid-template-columns: 116px repeat(2, 1fr);
padding-top: 5.5rem;
column-gap: 2rem;
align-items: center;
}

.home__img {
  background: url(${David});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px #1cb698;
  order: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: profile__animate 8s ease-in-out infinite 1s;
}
@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
`;


export const Home = () => {
  return (
    <HomeWrapper>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__contect grid">
            <Social />

            <div className="home__img">
            </div>

            <Data />
          </div>

          <ScrollDown />
        </div>

      </section>
    </HomeWrapper>
  )
};
