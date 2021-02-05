import React, { useEffect, useState } from "react"
import { PlusCircle } from "react-feather"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import Layout from "../../components/Layout"
import BlogItem from "./BlogItem"
import Style from "./blogs.module.scss"

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBLogs] = useState([])

  useEffect(() => {
    if (localStorage.getItem("blogs")) {
      setBlogs([...JSON.parse(localStorage.getItem("blogs"))])
    }
  }, [])

  useEffect(() => {
    setFilteredBLogs([...blogs])
  }, [blogs])

  return (
    <Layout title='Blogs'>
      <div className='d-flex justify-content-end'>
        <Link
          to='/blog/add'
          className={classNames(Style.addButton, "mr-2", "pointer")}
        >
          <PlusCircle />
        </Link>
      </div>
      <div className={Style.blogsContainer}>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </Layout>
  )
}
export default Blogs
