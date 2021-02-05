import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { capitalize } from "../../utilities"
import Layout from "../../components/Layout"
import LinkToPage from "../../components/LinkToPage"
import AvailableColors from "./AvailableColors"
import AvailableSizes from "./AvailableSizes"
import Style from "./product-detail.module.scss"
import defaultImage from "./defaultImage.png"

const ProductDetail = ({ editMode }) => {
  const history = useHistory()
  const { id } = useParams()
  const [product, setProduct] = useState(false)

  useEffect(() => {
    const products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : []
    const product = products.filter((product) => product.id == id)
    setProduct(product.length ? product[0] : null)
  }, [])

  const availableColors = ["tomato", "blue", "brown", "grey"]
  const availableSizes = [
    "Extra Bulky",
    "Standard",
    "Head top",
    "kids size",
    "Standard",
  ]
  return (
    <Layout title={product.name ? capitalize(product.name) : ""}>
      <LinkToPage to='/products' title='Back to Products' />
      <div className={Style.productDetail}>
        <div className={Style.imageContainer}>
          <img src={product.url ? product.url : defaultImage} alt='' />
        </div>
        <div className={Style.detailContainer}>
          <div className='mb-3'>
            <h5 className='text-capitalize mb-0'>{product.name}</h5>
            <span className='text-secondary'>{product.code}</span>
          </div>
          <div>
            <span>Price: </span>
            <span className='text-info'>$ {product.price}</span>
          </div>
          <AvailableColors colors={availableColors} />
          <AvailableSizes sizes={availableSizes} />
          <div>
            <h6>Description:</h6>
            <span>{product.description || ""}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
