// src/pages/VendorProducts.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VendorProducts = () => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const vendorRes = await axios.get(`/api/vendors/${vendorId}`);
        const productRes = await axios.get(`/api/vendors/${vendorId}/products`);
        setVendor(vendorRes.data);
        setProducts(productRes.data);
      } catch (error) {
        console.error('Error fetching vendor or products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVendorData();
  }, [vendorId]);

  if (loading) return <div className="container py-5">Loading...</div>;
  if (!vendor) return <div className="container py-5">Vendor not found</div>;

  return (
    <div className="container py-5">
      <h2 className="mb-3 text-success">{vendor.name}'s Products</h2>
      <p className="text-muted mb-4">{vendor.location}</p>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <button className="btn btn-outline-success btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorProducts;
