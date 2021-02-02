import React, { useMemo, useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { NavLink } from "react-router-dom"
import * as Icon from "react-feather"
import ProductAddCard from "../ProductAddCard"
import Style from "./product-table.module.scss"

const ProductTable = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(
      localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : []
    )
  }, [])

  const columns = useMemo(
    () => [
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Price",
        selector: "price",
        sortable: true,
      },
      {
        name: "Code",
        selector: "code",
        sortable: true,
      },
      {
        cell: () => (
          <>
            <Icon.Eye color='#7ab5c1' />
            <Icon.Trash2 color='tomato' />
          </>
        ),
        button: true,
      },
    ],
    []
  )

  return (
    <div>
      {products.length ? (
        <div className={Style.pageContainer}>
          <div className={Style.headingAction}>
            <NavLink
              title='Add Products'
              className={Style.addButton}
              to='/products/add'
            >
              <Icon.PlusCircle className={Style.addIcon} />
            </NavLink>
          </div>
          <div>
            <DataTable columns={columns} data={products} pagination />
          </div>
        </div>
      ) : (
        <ProductAddCard />
      )}
    </div>
  )
}

export default ProductTable
