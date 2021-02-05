import { lazy } from "react"

const routes = [
  {
    id: 1,
    path: "/",
    redirect: "/products",
    exact: true,
  },
  {
    id: 2,
    path: "/product/edit/:slug",
    component() {
      const ProductEdit = lazy(() => import("./pages/ProductAddEdit"))
      return <ProductEdit editMode />
    },
  },
  {
    id: 3,
    path: "/product/view/:id",
    component() {
      const ProductDetail = lazy(() => import("./pages/ProductDetail"))
      return <ProductDetail editMode />
    },
  },
  {
    id: 4,
    path: "/products/add",
    component: lazy(() => import("./pages/ProductAddEdit")),
  },
  {
    id: 5,
    path: "/products",
    component: lazy(() => import("./pages/Products")),
  },
  {
    id: 6,
    path: "/blogs",
    component: lazy(() => import("./pages/Blogs")),
  },
  {
    id: 7,
    path: "/blog/add",
    component: lazy(() => import("./pages/BlogAddEdit")),
  },
  {
    id: 8,
    path: "/blog/edit/:slug",
    component() {
      const BlogEdit = lazy(() => import("./pages/BlogAddEdit"))
      return <BlogEdit editMode />
    },
  },
  {
    id: 9,
    path: "/*",
    component: lazy(() => import("./pages/404")),
  },
]

export default routes
