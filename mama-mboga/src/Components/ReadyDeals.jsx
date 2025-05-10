import React from 'react'
import '../Styles/ReadyDeals.css'
import tomato from '../assets/tomato.png'
import meat from '../assets/meat.png'
import chicken from '../assets/chicken.png'
import watermelon from '../assets/watermelon.png'
import spinach from '../assets/spinach.png'

const products = [
    {id:1, name:'Fresh tomatos', price: 'ksh 100', image: tomato},
    {id:2, name:'Fresh spinach', price: 'ksh 50', image: spinach},
    {id:3, name:'browler chicken', price: 'ksh 550', image: chicken},
    {id:4, name:'Fresh meat', price: 'ksh 300', image: meat},
    {id:4, name:'Fresh watermelon', price: 'ksh 100', image: watermelon},
]

const ReadyDeals = () => {
  return (
    <section className='deals-section py-5'>
        <div className='container'>
            <h2 className='text-center mb-4'>Handpicked deals to get you started</h2>
        </div>
        <div className='row justify-content-center'>
            {products.map (product => (
               <div className='col-md-4 mb-4' key={product.id}>
                <div className='card h-100 text-center shadow product-card'>
                    <div className='card-img-wrapper position-relative'>
                        <img src={product.image} alt={product.name} className="product-img-top"/>
                        <button className="btn btn-success add-to-cart-btn position-absolute">Add to Cart</button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-success fw-bold">{product.price}</p>
                    </div>
                </div>
               </div>
            ))}
        <div className="text-center mt-4">
            <button className="btn btn-outline-success btn-lg">Browse More</button>
        </div>
        </div>
    </section>
  )
}

export default ReadyDeals
