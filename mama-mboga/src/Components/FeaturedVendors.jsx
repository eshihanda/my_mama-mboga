import React from 'react'
import { Link } from 'react-router-dom'
import mama from '../assets/vendor1.jpeg'
import mama2 from '../assets/vendor2.jpeg'
import mama3 from '../assets/vendor3.jpeg'

// Sample vendor data with IDs
const vendors = [
  { id: 'wambui', name: 'Mama Wambui', location: 'Umoja 1 Market', image: mama },
  { id: 'esther', name: 'Mama Esther', location: 'Umoja 1 Market', image: mama2 },
  { id: 'hilda', name: 'Hilda Baci', location: 'Umoja 1 Market', image: mama3 },
]

const FeaturedVendors = () => {
  return (
    <section style={{ backgroundColor: '#e9f5ec', padding: '4rem 0' }}>
      <div className='container-lg text-center'>
        <h2>Mama Mbogas Near You</h2>
        <p className='mb-5 text-muted'>Support your local farmers and sellers 🌱</p>
      </div>
      <div className='container'>
        <div className='row'>
          {vendors.map(vendor => (
            <div className='col-md-4 mb-4' key={vendor.id}>
              <div className='card h-100'>
                <img src={vendor.image} alt={vendor.name} className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>{vendor.name}</h5>
                  <p className='card-text text-muted'>{vendor.location}</p>
                  {/* Link to vendor-specific products page */}
                  <Link
                    to={`/vendors/${vendor.id}/products`}
                    className='btn btn-success'
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVendors
