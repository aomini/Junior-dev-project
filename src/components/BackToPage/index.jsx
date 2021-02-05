import React from "react"
import { ArrowLeft } from "react-feather"
import { Link } from "react-router-dom"

const BackToPage = ({ to, title }) => {
  return (
    <div className='py-3'>
      <Link to={to}>
        <ArrowLeft />
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default BackToPage
