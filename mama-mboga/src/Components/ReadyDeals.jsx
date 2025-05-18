import React, {useEffect, useState} from 'react'
import '../Styles/ReadyDeals.css'
import { useLocation } from 'react-router'
import tomato from '../assets/tomato.png'
import meat from '../assets/meat.png'
import chicken from '../assets/chicken.png'
import watermelon from '../assets/watermelon.png'
import spinach from '../assets/spinach.png'

const allProducts = [
    {id:1, name:'Fresh tomatos', price: 'ksh 100', image: tomato},
    {id:2, name:'Fresh spinach', price: 'ksh 50', image: spinach},
    {id:3, name:'browler chicken', price: 'ksh 550', image: chicken},
    {id:4, name:'Fresh meat', price: 'ksh 300', image: meat},
    {id:4, name:'Fresh watermelon', price: 'ksh 100', image: watermelon},
]

const ReadyDeals = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const searchQuery = searchParams.get('search')?.toLowerCase() || '';

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(()=> {
        if(searchQuery) {
            const filtered = allProducts.filter(product => 
                product.name.toLowerCase().includes(searchQuery)
            );
            setFilteredProducts(filtered)
        } else {
            setFilteredProducts(allProducts)
        };
    }, [searchQuery]);
  return (
    <section className='deals-section py-5'>
        <div className='container'>
            <h2 className='text-center mb-4'>Handpicked deals to get you started</h2>
            {searchQuery && (
                <p className='text-muted text-center mb-4'>
                    Showing results for "<strong>{searchQuery}</strong>"
                </p>
            )}
        </div>
        <div className='row justify-content-center'>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div className='col-md-4 mb-4' key={product.id}>
                        <div className='card h-100 text-center shadow product-card'>
                            <div className='card-img-wrapper position-relative'>
                                <img src={product.image} alt={product.name} className="product-img-top"/>
                                <button className="btn btn-success add-to-cart-btn position-absolute">
                                    Add to Cart
                                </button>
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>{product.name}</h5>
                                <p className='card-text text-success fw-bold'>{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div lassName='col-12 text-center'>
                    <p className='text-danger'>No products match your search.</p>
                </div>
            )}
            <div className="text-center mt-4">
                <button className="btn btn-outline-success btn-lg">
                    Browse More
                </button>
            </div>
        </div>
    </section>
  )
}

export default ReadyDeals
