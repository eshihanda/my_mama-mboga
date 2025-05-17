import React from 'react'

const HowItWorks = () => {
  return (
    <section style={{ backgroundColor: '#f9fdfb', padding: '4rem 0' }}>
        <div className='container text-center'>
            <h2 className='mb-4'>How Does it Work?</h2>
            <p className='mb-5 text-muted'>From your local vendors to your home just in a few steps</p>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='mb-4'>
                        <i className="bi bi-cart-plus fs-1 text-success"></i>
                    </div>
                    <h5>Add to Cart</h5>
                    <p className="text-muted">Select what you need and add items to your shopping cart.</p>
                </div>
                <div className="col-md-3">
                    <div className="mb-4">
                        <i className="bi bi-truck fs-1 text-success"></i>
                    </div>
                    <h5>Fast Delivery</h5>
                    <p className="text-muted">Your order is packed and delivered right to your doorstep.</p>
                </div>
                <div className="col-md-3">
                    <div className="mb-4">
                        <i className="bi bi-emoji-smile fs-1 text-success"></i>
                    </div>
                    <h5>Enjoy Freshness</h5>
                    <p className="text-muted">Receive fresh food stuffs and enjoy healthy living!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
