import React from "react"
import { Link } from "react-router-dom"
import { Jumbotron } from "reactstrap"
import * as Icon from "react-feather"
import Style from "./product-add-card.module.scss"

const ProductAddCard = () => {
  return (
    <div className={Style.addCardContainer}>
      <Jumbotron>
        <p className={Style.cardText}>
          No products Found. Would you like to Add?
        </p>
        <div className={Style.addButtonContainer}>
          <Link className={Style.addButton} to='/products/add'>
            <Icon.PlusCircle />
          </Link>
        </div>
      </Jumbotron>
    </div>
  )
}

export default ProductAddCard
