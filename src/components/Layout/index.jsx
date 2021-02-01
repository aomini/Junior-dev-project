import React from 'react'
import {Link} from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const Layout = (props) => {
    return (
        <div className="page-layout">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.title}</BreadcrumbItem>
            </Breadcrumb>
            {props.children}
        </div>
    )
}

export default Layout
