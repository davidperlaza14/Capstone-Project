import React from "react";
import styled from "styled-components";
import { Holby } from "./Holby";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

export const HolbiesWrapper = styled.section`
* {
  background-color:#1e2326;
}

body {
  font-family: 'Oxygen', sans-serif;
  height: 100%;
  color: rgb(22, 23, 24);
  
}

.img {
  width: 350px;
  height: 282px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #fc0000;
}
a {
  background-color: #e9e5e5 !important; 
  color: black !important;
}
a:hover {
  background-color: #1C6B1C;
  
}
.btn {
  color: aliceblue;
  border-radius: 20% !important;
}

.btn:hover {
  background-color: #1CB698 !important;
}`;

export const cards = [
  {
    id: 1,
    title: "David S. Perlaza",
    image: image1,
    url: 'https://twitter.com/Perlazadavid14'
    
  },
  {
    id: 2,
    title: "Ricardo Montaña",
    image: image2,
    url: '#'
  },
  {
    id: 3,
    title: "Avelino Carvajal",
    image: image3,
    url: '#'
  },
  {
    id: 4,
    title: "Oscar Braly",
    image: image4,
    url: '#'
  },
  {
    id: 5,
    title: "Munri Mclillar",
    image: image5,
    url: '#'
  },
  {
    id: 6,
    title: "Veronica Udsman",
    image: image6,
    url: '#'
  },
];

export function Holbies() {
  console.log(cards);
  return (
    <HolbiesWrapper>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={cards.id}>
            <Holby title={card.title} imgSource = {card.image} url={card.url}/>
          </div>
        ))}
      </div>
    </div>
    </HolbiesWrapper>
  );
}
