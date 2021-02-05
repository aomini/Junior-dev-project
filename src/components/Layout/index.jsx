import React from "react"
import { Link } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import "./layout.scss"

const Layout = (props) => {
  return (
    <div className='page-layout container mt-4'>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/'>Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.title}</BreadcrumbItem>
        </Breadcrumb>
        <div style={{ padding: "15px" }}>{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
