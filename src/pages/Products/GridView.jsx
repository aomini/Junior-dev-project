import React from "react"
import classNames from "classnames/bind"
import ProductAddCard from "../../components/ProductAddCard"
import ProductCard from "./ProductCard"
import DeleteModal from "./DeleteModal"
import Style from "./grid-view.module.scss"

const GridView = ({
  products,
  setProducts,
  modal,
  setModal,
  selector,
  setSelector,
}) => {
  return (
    <div
      className={classNames(
        Style.productListContainer,
        !products.length ? Style.fullgrid : ""
      )}
    >
      {products.length ? (
        products.map((product) => (
          <ProductCard
            className={Style.card}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            url={product.url || ""}
            setModal={setModal}
            setSelector={setSelector}
          />
        ))
      ) : (
        <ProductAddCard />
      )}
      <DeleteModal
        className=''
        setModal={setModal}
        modal={modal}
        setSelector={setSelector}
        selector={selector}
        products={products}
        setProducts={setProducts}
      />
    </div>
  )
}

export default GridView
