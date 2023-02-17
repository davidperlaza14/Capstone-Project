import React from 'react'
import './card.css'




function Card({title, imgSource, url}) {
  return (

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
  )
}


export default Card