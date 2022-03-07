import React from 'react'
import './home.scoped.css'
import Product from '../Product/Product'

const Home = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 pt-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <img
              src="/assets/images/home.jpeg"
              className="d-block mx-lg-auto img-fluid rounded-3 shadow"
              alt="home"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-glow">
              <span className="text-gradient">Metavase</span> is here.
            </h1>
            <p className="lead">
              Metavase is a online store platform for metaverse product
              e‑commerce. We use virtual shopping and AR shopping technology to
              enable customers to experience a new shopping in metaverse. A new
              virtual sales channel is established through our proprietary
              virtual reality commerce platform.
            </p>
            <div className="col-sm-12 mt-4">
              <div className="content">
                <p className="">Subscribe to our newsletter</p>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </>
  )
}

export default Home
