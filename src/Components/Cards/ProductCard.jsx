import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className="card my-4 py-4" style={{ width: '18rem' }}>
      <img
        src={props.product.item.enrichment.images.primary_image_url}
        className="card-img-top"
        alt={props.product.item.product_description.title}
      />
      <div className="card-body text-center">
        <h5 className="card-title">
          {props.product.item.product_description.title}
        </h5>
        <p className="lead">{'$' + props.product.price.current_retail}</p>
        <NavLink
          to={`/products/${props.product.item.dpci}`}
          state={props.product}
          className="btn btn-outline-primary"
        >
          Buy Now
        </NavLink>
      </div>
    </div>
  )
}

export default ProductCard
