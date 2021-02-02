import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import ProductCard from "../../components/ProductCard"
import Style from "./product-view.module.scss"

const ProductView = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(
      localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    )
  }, [])

  return (
    <Layout title='Product View Page'>
      <div className={Style.productListContainer}>
        {products &&
          products.map((product) => (
            <ProductCard
              className={Style.card}
              key={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    </Layout>
  )
}

export default ProductView
