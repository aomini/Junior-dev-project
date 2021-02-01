import Products from '../pages/Products'
import Blogs from '../pages/Blogs'
import ProductView from '../pages/ProductView'

const Routes = [
    {
        path:'/',
        redirect: '/product-view',
        exact:true
    },
    {
        path:'/products',
        component: Products,
        exact:true

    },
    {
        path:'/blogs',
        component: Blogs,
        exact:true

    },
    {
        path:'/product-view',
        component: ProductView,
        exact:true
    },
]

export default Routes