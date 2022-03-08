import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../redux/actions'

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart')
  const prodID = useParams()
  const location = useLocation()
  const state = location.state
  console.log(state)

  const productDetail = {
    id: prodID,
    title: state.item.product_description.title,
    image: state.item.enrichment.images.primary_image_url,
    price: state.price.current_retail,
    description:
      'Oculus Quest 2 is a virtual reality headset — our most advanced all-in-one VR system yet. From multiplayer games to unique social experiences to joining up with friends at a live show or instructor-led workout, Quest 2 provides new opportunities to meet and connect with others in VR.',
    review: state.ratings_and_reviews.statistics.rating.count,
    rating: state.ratings_and_reviews.statistics.rating.average,
  }

  const dispatch = useDispatch()

  const handleCart = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product))
      setCartBtn('Remove from Cart')
    } else {
      dispatch(delItem(product))
      setCartBtn('Add to Cart')
    }
  }

  return (
    <>
      <div
        className="container rounded shadow-sm py-5"
        style={{ marginTop: '10rem', backgroundColor: 'white' }}
      >
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center mx-auto product">
            <img
              className="d-block img-fluid"
              src={productDetail.image}
              alt={productDetail.title}
              width="500"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center px-5">
            <h1>{productDetail.title}</h1>
            <hr />
            <h2 className="my-4">{'$' + productDetail.price}</h2>
            <p className="lead">{productDetail.description}</p>
            <button
              className="btn btn-outline-primary mt-4"
              onClick={() => handleCart(productDetail)}
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
