import React from 'react'
import Map from '../../Components/Map/Map'

const Contact = () => {
  return (
    <div>
      <div className="container py-5 mb-5" style={{ marginTop: '6rem' }}>
        <div className="row">
          <div className="col-12 mb-5">
            <h1>Have some question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="Dongphil Yoo"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="hi@dongphilyoo.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  How can I help you?
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
              <button type="button" className="btn btn-outline-primary mb-5">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
