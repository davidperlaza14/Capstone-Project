import React from 'react'



const info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
      <i class="uil uil-award-alt about__icon"></i>

        <h3 className='about__title'>Python</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

      <div className='about__box'>
      <i class="uil uil-briefcase-alt about__icon"></i>
        <h3 className='about__title'>Django</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

      <div className='about__box'>
      <i class="uil uil-headphones about__icon"></i>
        <h3 className='about__title'>Flask</h3>
        <span className='about__subtitle'>Experience</span>
      </div>

    </div>
  )
}

export default info