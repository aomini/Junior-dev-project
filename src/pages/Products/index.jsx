import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import { Grid, AlignJustify, PlusCircle } from "react-feather"
import Layout from "../../components/Layout"
import ProductTable from "./ProductTable"
import GridComponent from "./GridView"
import Style from "./products.module.scss"

const Products = () => {
  const [gridView, setGridView] = useState(
    JSON.parse(localStorage.getItem("productGridView")) ? true : false
  )
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [selector, setSelector] = useState(false)

  useEffect(() => {
    setProducts(
      localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    )
  }, [])

  useEffect(() => {
    localStorage.setItem("productGridView", gridView ? 1 : 0)
  }, [gridView])

  const childrenProps = {
    products,
    setProducts,
    modal,
    setModal,
    selector,
    setSelector,
  }

  return (
    <Layout title='Products'>
      <div className={Style.pageContainer}>
        <div className={Style.headingAction}>
          <div>
            <span className={Style.headingTitle}>
              {gridView ? "Grid View" : "Table View"}
            </span>
          </div>
          <div>
            <button
              title='Add Products'
              className={classNames(Style.addButton, "mr-2", "pointer")}
              onClick={() => setGridView(!gridView)}
            >
              {!gridView ? (
                <Grid className={Style.addIcon} />
              ) : (
                <AlignJustify className={Style.addIcon} />
              )}
            </button>
            <Link
              title='Add Products'
              className={Style.addButton}
              to='/products/add'
            >
              <PlusCircle className={Style.addIcon} />
            </Link>
          </div>
        </div>
      </div>
      {gridView ? (
        <GridComponent {...childrenProps} />
      ) : (
        <ProductTable {...childrenProps} />
      )}
    </Layout>
  )
}

export default Products
