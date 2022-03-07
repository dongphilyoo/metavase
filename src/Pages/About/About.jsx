import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src="/assets/images/about.png"
            className="d-block mx-lg-auto img-fluid"
            alt="about"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 fw-bold">About Us</h1>
          <p className="lead mb-4">
            Metavase is a online store platform for metaverse product
            e‑commerce. We use virtual shopping and AR shopping technology to
            enable customers to experience a new shopping in metaverse. A new
            virtual sales channel is established through our proprietary virtual
            reality commerce platform.
          </p>
          <NavLink to={'/contact'} className="btn btn-primary px-3">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default About
