import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import mama from '../assets/mama.jpeg'
import '../Styles/HeroSection.css';

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if(query.trim()) {
      navigate(`/products?search=${encodedURIComponent(query)}`);
    }
  };

  return (
    <div className='py-5 hero-section min-vh-100'>
      <div className='row justify-content-center align-items-center '>
        {/* the left side */}
        <div className='col-md-5 pt-3 text-center  text-md-start'>
            <h1>
                <div className='display-3'>Welcome to our Store</div>
            </h1>
            <p className='lead my-4 text-muted'> Find the best and fresh food products delivered fast to your doorstep</p>
            <div className='mt-5 d-flex'>
              <input type="text"
              className='form-control w-50 me-2'
              placeholder='search for products'
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={handleSearch} className="btn btn-success">
                Search
              </button>
            </div>
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
