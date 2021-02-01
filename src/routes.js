import {lazy} from 'react'

const routes = [
    {
        path:'/',
        redirect: '/product-view',
        exact:true
    },
    {
        path:'/products',
        component: lazy(()=> import('./pages/Products')),
    },
    {
        path:'/blogs',
        component: lazy(()=> import('./pages/Blogs')),
    },
    {
        path:'/product-view',
        component: lazy(()=> import('./pages/ProductView')),
    },
    {
        path:'/*',
        component: lazy(()=> import('./pages/404')),
    }
]

export default routes 