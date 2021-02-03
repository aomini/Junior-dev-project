import { lazy } from "react"

const routes = [
  {
    id: 1,
    path: "/",
    redirect: "/products",
    exact: true,
  },
  {
    id: 3,
    path: "/product/edit/:slug",
    component() {
      const ProductEdit = lazy(() => import("./pages/ProductAddEdit"))
      return <ProductEdit editMode />
    },
  },
  {
    id: 2,
    path: "/products/add",
    component: lazy(() => import("./pages/ProductAddEdit")),
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
    id: 6,
    path: "/*",
    component: lazy(() => import("./pages/404")),
  },
]

export default routes
