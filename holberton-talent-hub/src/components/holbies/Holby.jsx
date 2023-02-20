import React from 'react';
import styled from "styled-components";

export const HolbyWrapper = styled.section`
.card {
  margin: 15px 0 15px 0 ;
  grid-template-columns:repeat(4);
  width: 300px ;
}

.card-title {
  color: #1CB698;
  background-color: rgb(46, 46, 46);
}

.card:hover {
  box-shadow: 5px 10px 20px 1px #1CB698;
  transition: all 0.7s linear;
}
.card-body {
  padding: 2rem 0 !important;
  background-color: rgb(46, 46, 46);

}

.card-text {
  padding: 0.3rem 1rem;
  font-size: 1rem;
  background-color: rgb(46, 46, 46);
  
}

.overflow {
  overflow: hidden;
}

.car-img-top{
  transition: all 0.2s ease-in-out;

}

.car-img-top:hover{
  transform: scale(1.8);

}`;

export function Holby({title, imgSource, url}) {
  return (
<HolbyWrapper>
  <div>
    <div className='card text-center  animate__animated animate__fadeInUp'>
      <div className='overflow'>
      <img className='img car-img-top' src={imgSource} alt='images' />
      </div>  


      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary text-light '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id modi veritatis eius. Rerum, aperiam praesentium ea adipisci eos maxime magnam iure numquam sequi quod vel, eveniet omnis nam quos debitis?</p>
        <a href= {url} className='btn btn-outline-secondary rounded-0' target='_blank'> My profile</a>

      </div>

    </div>
  </div>
  </HolbyWrapper>
  )
}