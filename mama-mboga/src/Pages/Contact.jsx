import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h5>Get in Touch</h5>
          <p>📞 +254 701187321</p>
          <p>📧 order@shopmtaani.com</p>
          <p>📍 Umoja 1 Market, Nairobi</p>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

