import React from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"
import * as Icon from "react-feather"
import classNames from "classnames/bind"
import Style from "./product-card.module.scss"

const ProductCard = ({ url, name, price, id, setSelector, setModal }) => {
  const cardButtons = [
    {
      type: "view",
      className: classNames(Style.button, Style.view),
      icon: <Icon.Eye className={Style.buttonIcon} />,
      to: "/product/view/" + id,
    },
    {
      type: "edit",
      className: classNames(Style.button, Style.edit),
      icon: <Icon.Edit className={Style.buttonIcon} />,
      to: "/product/edit/" + id,
    },
    {
      type: "delete",
      className: classNames(Style.button, Style.delete),
      icon: <Icon.X className={Style.buttonIcon} />,
      handler: true,
      handle: {
        onClick: () => {
          setSelector(id)
          setModal(true)
        },
      },
    },
  ]

  return (
    <Card className={Style.card}>
      <CardImg top width='200' src={url} alt='Card image cap' />
      <CardBody className={Style.cardBody}>
        <CardTitle
          className={classNames(Style.cardTitle, "text-capitalize")}
          tag='h6'
        >
          {name}
        </CardTitle>
        <div className={Style.cardSubtitleContainer}>
          <CardSubtitle className={Style.cardSubtitle} tag='span'>
            $ {price}
          </CardSubtitle>
        </div>
        <div className={Style.buttonContainer}>
          {cardButtons.map((button) => (
            <Button key={button.type} className={button.className}>
              {button.handler ? (
                <span {...button.handle}>{button.icon}</span>
              ) : (
                <Link to={button.to}>{button.icon}</Link>
              )}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
