import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#f8f9fa',padding: '3rem 0', marginTop: '4rem'}}>
        <div className='container'>
            <div className='row text-muted'>
                <div className='col-md-4 mb-4'>
                    <h4 className='text-success'>Fresh and Delivered</h4>
                    <p>Hand-selected foods from your local vendors; including fresh fruits and vegetables direct from responsible farmers, 
                       hygienically packed and delivered Fresh to you.</p>
                </div>
                <div className='col-md-2 mb-4'>
                    <h5 className='text-dark'>Our Store</h5>
                    <ul className='list-unstyled'>
                        <li> <a href="#" className='text-muted'></a>Who We Are</li>
                        <li> <a href="#" className='text-muted'></a> Gift Cards</li>
                        <li> <a href="#" className='text-muted'></a>Get in Touch</li>
                        <li> <a href="#" className='text-muted'></a> Contact Us</li>
                    </ul>
                </div>
                <div className='col-md-3 mb-4'>
                    <h5 className='text-dark'>Customer Services</h5>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-muted">FAQs</a></li>
                        <li><a href="#" className="text-muted">T & Cs</a></li>
                        <li><a href="#" className="text-muted">Privacy Policy</a></li>

                    </ul>
                </div>
                <div className='col-md-3 mb-4'>
                    <h5 className='text-dark fw-bold'>CONTATC INFORMATION</h5>
                    <div className="d-flex gap-3">
                        <a href="#" className="text-success fs-5"><FaFacebookF /></a>
                        <a href="#" className="text-success fs-5"><FaTwitter /></a>
                        <a href="#" className="text-success fs-5"><FaInstagram /></a>
                    </div>
                </div>

            </div>
            <div className="text-center text-muted mt-4">
                <small>&copy; {new Date().getFullYear()} SHOP MTAANI. Handcrafted by Eshihanda.</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer
