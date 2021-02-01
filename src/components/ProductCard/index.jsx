import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {Link} from 'react-router-dom'
import Style from './product-card.module.scss'

const ProductCard = props => {
    return (
        <Card className={Style.card}>
            <CardImg top width="200" src="https://source.unsplash.com/random" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h6">{props.name.toUpperCase()}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-dark">$ {props.price}</CardSubtitle>
                <Button className={Style.button}>
                    <Link to="/products"  >View</Link>
                </Button>
            </CardBody>
        </Card>
    )
}



export default ProductCard
