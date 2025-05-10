import React from 'react'
import mama from '../assets/vendor1.jpeg';
import mama2 from '../assets/vendor2.jpeg';
import mama3 from '../assets/vendor3.jpeg';

const FeaturedVendors = () => {
  return (
    <section style={{backgroundColor:'#e9f5ec', padding: '4rem 0' }}>
        <div className='container-lg text-center'>
            <h2>Mama Mbogas Near You</h2>
            <p className='mb-5 text-muted'>Support your local farmers and sellers 🌱</p>
        </div>
        <div className='row'>
            <div className='col-md-4 mb-4'>
                <div className='card h-100'>
                    <img src={mama} alt="vendor-1" className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Mama Wambui</h5>
                        <p className='card-text text-muted'> Umoja 1 Market</p>
                        <a href="#" className='btn btn-success'>View products</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='card h-100'>
                    <img src={mama2} alt="vendor-1" className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Mama Esther</h5>
                        <p className='card-text text-muted'> Umoja 1 Market</p>
                        <a href="#" className='btn btn-success'>View products</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='card h-100'>
                    <img src={mama3} alt="vendor-1" className='card-img-top'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Hilda Baci</h5>
                        <p className='card-text text-muted'> Umoja 1 Market</p>
                        <a href="#" className='btn btn-success'>View products</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedVendors
