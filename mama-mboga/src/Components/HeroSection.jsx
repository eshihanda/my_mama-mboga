//section next to navbar
import React from 'react'
import mama from '../assets/mama.jpeg'
import '../Styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className='pt-5 hero-section min-vh-100'>
      <div className='row justify-content-center align-items-center '>
        {/* the left side */}
        <div className='col-md-5 pt-3 text-center  text-md-start'>
            <h1>
                <div className='display-3'>Welcome to our Store</div>
            </h1>
            <p className='lead my-4 text-muted'> Find the best and fresh food products delivered fast to your doorstep</p>
            <a href="#" class="btn btn-success btn-lg">Order now</a>
        </div>
        {/* the right side */}
        <div className='col-md-5 text-center d-none d-md-block pt-3 hero-image'>
            <img src={mama} alt="mama mboga" className='img-fluid pt-3' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
