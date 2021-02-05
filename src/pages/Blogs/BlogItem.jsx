import { Button } from "reactstrap"
import React from "react"
import { Edit, Trash2 } from "react-feather"
import { Link } from "react-router-dom"
import { truncateText } from "../../utilities"
import Style from "./blog-item.module.scss"

const BlogItem = ({ blog }) => {
  return (
    <div className={Style.blogItem}>
      <div className={Style.imageContainer}>
        <img
          src='https://cdn4.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png'
          alt=''
        />
      </div>
      <div className={Style.blogDetails}>
        <h5 className={Style.blogTitle}>{blog.title}</h5>
        <h6 className='text-secondary'>{blog.subtitle}</h6>
        <p className={Style.blogShortDesc}>
          {truncateText(blog.description, 430)}
        </p>
        <div className={Style.actionButtons}>
          <Link className='text-light' to={"/blog/edit/" + blog.id}>
            <Button color='info' className='mr-2'>
              <Edit />
            </Button>
          </Link>

          <Link className='text-light' to={"/blog/edit/" + blog.id}>
            <Button color='danger'>
              <Trash2 />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
