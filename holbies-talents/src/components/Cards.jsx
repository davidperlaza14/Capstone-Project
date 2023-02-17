import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const cards = [
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

function Cards() {
  console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={cards.id}>
            <Card title={card.title} imgSource = {card.image} url={card.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
