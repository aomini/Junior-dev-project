import React from "react"
import * as Icon from "react-feather"
import { useParams, useHistory } from "react-router-dom"
import ProductForm from "./ProductForm"
import Style from "./product-add.module.scss"

const ProductAdd = ({ editMode }) => {
  const { slug } = useParams()
  const history = useHistory()

  return (
    <div className={Style.formPage}>
      <div className={Style.headingArea}>
        <span>{editMode ? "Edit" : "Add"} A Product</span>
        <span onClick={history.goBack}>
          <Icon.X className={Style.svg} />
        </span>
      </div>
      <div className={Style.ProductForm}>
        <ProductForm id={slug} editMode={editMode} />
      </div>
    </div>
  )
}

export default ProductAdd
