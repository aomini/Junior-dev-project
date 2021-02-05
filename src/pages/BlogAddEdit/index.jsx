import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import { XCircle } from "react-feather"
import Layout from "../../components/Layout"
import BlogForm from "./BlogForm"
import Style from "./blog-add-edit.module.scss"

const BlogAddEdit = ({ editMode }) => {
  const { slug } = useParams()
  const history = useHistory()

  return (
    <Layout title={editMode ? "Edit blog" : "Add Blog"}>
      <div className={Style.formPage}>
        <div className={Style.headingArea}>
          <span>{editMode ? "Edit" : "Add"} A Blog</span>
          <Button className={Style.addButton} onClick={history.goBack}>
            <XCircle className={Style.svg} />
          </Button>
        </div>
        <div className={Style.BlogForm}>
          <BlogForm id={slug} editMode={editMode} />
        </div>
      </div>
    </Layout>
  )
}

export default BlogAddEdit
