import { lazy } from "react"

const routes = [
  {
    id: 1,
    path: "/",
    redirect: "/product-view",
    exact: true,
  },
  {
    id: 2,
    path: "/products/add",
    component: lazy(() => import("./pages/ProductAdd")),
  },
  {
    id: 3,
    path: "/products",
    component: lazy(() => import("./pages/Products")),
  },
  {
    id: 4,
    path: "/blogs",
    component: lazy(() => import("./pages/Blogs")),
  },
  {
    id: 5,
    path: "/product-view",
    component: lazy(() => import("./pages/ProductView")),
  },
  {
    id: 6,
    path: "/*",
    component: lazy(() => import("./pages/404")),
  },
]

export default routes
