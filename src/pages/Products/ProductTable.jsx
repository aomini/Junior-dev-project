import React from "react"
import DataTable from "react-data-table-component"
import { Link } from "react-router-dom"
import { Eye, Edit, Trash2 } from "react-feather"
import ProductAddCard from "../../components/ProductAddCard"
import DeleteModal from "./DeleteModal"

const ProductTable = ({
  products,
  setProducts,
  modal,
  setModal,
  selector,
  setSelector,
}) => {
  const columns = [
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
      cell: (row) => (
        <>
          <Link to={"/product/view/" + row.id} className='mr-2'>
            <Eye color='#1d1d1d' />
          </Link>
          <Link to={"/product/edit/" + row.id} className='mr-2'>
            <Edit color='#7ab5c1' />
          </Link>
          <span
            onClick={() => {
              setSelector(row.id)
              setModal(true)
            }}
          >
            <Trash2 color='tomato' />
          </span>
        </>
      ),
      button: true,
    },
  ]

  return (
    <div>
      <DeleteModal
        className=''
        setModal={setModal}
        modal={modal}
        setSelector={setSelector}
        selector={selector}
        products={products}
        setProducts={setProducts}
      />
      {products.length ? (
        <DataTable columns={columns} data={products} pagination />
      ) : (
        <ProductAddCard />
      )}
    </div>
  )
}

export default ProductTable
