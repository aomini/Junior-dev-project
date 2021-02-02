import React from "react"
import * as Icon from "react-feather"
import { NavLink, Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import ProductForm from "../../components/ProductForm"
import Style from "./product-add.module.scss"

const ProductAdd = () => {
  return (
    <div className={Style.formPage}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/products'>Products</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Add Product</BreadcrumbItem>
      </Breadcrumb>
      <div className={Style.headingArea}>
        <span>Add A Product</span>
        <NavLink to='/products'>
          <Icon.X />
        </NavLink>
      </div>
      <div className={Style.ProductForm}>
        <ProductForm />
      </div>
    </div>
  )
}

export default ProductAdd
