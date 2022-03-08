import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delItem } from '../../redux/actions/index'

const Cart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div
        className="px-4 bg-white shadow-sm rounded-3 w-90 mx-auto my-5"
        key={cartItem.title}
      >
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          />
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h4>{cartItem.title}</h4>
              <p className="lead fw-bold">{'$' + cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div
        className="px-4 bg-light rounded-3 py-5"
        style={{ marginTop: '8rem' }}
      >
        <div className="container py-4">
          <div className="row">
            <h3>Your cart is empty.</h3>
          </div>
        </div>
      </div>
    )
  }

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-primary my-2 w-25 mx-auto">
            Checkout
          </NavLink>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="container" style={{ marginTop: '8rem' }}>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
      </div>
    </>
  )
}

export default Cart
