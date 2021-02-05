import React from "react"
import * as Icon from "react-feather"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import ProductForm from "./ProductForm"
import Style from "./product-add.module.scss"
import Layout from "../../components/Layout"

const ProductAdd = ({ editMode }) => {
  const { slug } = useParams()
  const history = useHistory()

  return (
    <Layout title={editMode ? "Edit Product" : "Add Product"}>
      <div className={Style.formPage}>
        <div className={Style.headingArea}>
          <span>{editMode ? "Edit" : "Add"} A Product</span>
          <Button className={Style.addButton} onClick={history.goBack}>
            <Icon.XCircle className={Style.svg} />
          </Button>
        </div>
        <div className={Style.ProductForm}>
          <ProductForm id={slug} editMode={editMode} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductAdd
