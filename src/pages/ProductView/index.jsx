import React from 'react'
import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import {products} from '../../products'
import Style from './product-view.module.scss'

const index = () => {
    return (
        <Layout title="Product View Page">
            <div className={Style.productListContainer}>
               {products && products.map(product => <ProductCard className={Style.card} key={product.id} name={product.name} price={product.price} />)}
            </div>
        </Layout>
    )
}

export default index
