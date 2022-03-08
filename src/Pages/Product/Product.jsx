import React, { useEffect, useState } from 'react'
import { getProductsData } from '../../api/util'
import Skeleton from 'react-loading-skeleton'
import '../../../node_modules/react-loading-skeleton/dist/skeleton.css'
import ProductCard from '../../Components/Cards/ProductCard'
import './product.scoped.css'

const Product = () => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(false)

  let componentMounted = true

  useEffect(() => {
    setLoading(true)

    getProductsData().then((response) => {
      if (componentMounted) {
        const data = response?.data?.data?.search?.products
        setProductsData(data)
        setLoading(false)
        console.log(data)
      }
    })
    return () => {
      componentMounted = false
    }
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        {productsData.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </>
    )
  }

  return (
    <div className="wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            {/* <hr /> */}
          </div>
        </div>
      </div>
      <div className="container mt-0">
        <div className="row justify-content-around">
          {/*  */}
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Product
