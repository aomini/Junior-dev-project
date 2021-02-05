import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Col, Form, FormGroup } from "reactstrap"
import * as Icon from "react-feather"
import { toast } from "react-toastify"
import useForm from "../../hooks/useForm"
import FloatingFormGroup from "../../components/FloatingFormGroup"
import { validate } from "./validationRules"

const BlogForm = ({ id, editMode }) => {
  const history = useHistory()

  const submitData = () => {
    const blogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : []
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1
    const objId = editMode ? id : newId
    localStorage.setItem(
      "blogs",
      JSON.stringify([
        ...(editMode ? blogs.filter((blog) => blog.id != id) : blogs),
        { id: objId, ...values },
      ])
    )
    editMode ? toast.success("Updated blog") : toast.success("Added New blog")
    history.goBack()
  }

  const { handleChange, handleSubmit, setValues, values, errors } = useForm(
    submitData,
    validate
  )

  useEffect(() => {
    if (id) {
      let blogs = JSON.parse(localStorage.getItem("blogs"))
      let blog = blogs.filter((blog) => blog.id == id)
      setValues({ ...blog[0] })
    }
  }, [id, setValues])

  const formMapper = [
    {
      name: "title",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleChange,
      },
      col: 6,
    },
    {
      name: "subtitle",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleChange,
      },
      col: 6,
    },
    {
      name: "url",
      type: "text",
      defaultValue: "",
      dynamicAttributes: {
        onChange: handleChange,
        rows: "10",
      },
      col: 6,
    },
    {
      name: "description",
      type: "textarea",
      defaultValue: "",
      validation: true,

      dynamicAttributes: {
        rows: 10,
        onChange: handleChange,
      },
      col: 12,
    },
  ]
  return (
    <div>
      <Form>
        <FormGroup row>
          {formMapper.map((mapper) => (
            <Col sm={mapper.col} key={mapper.name}>
              <FloatingFormGroup
                {...mapper}
                errors={errors}
                value={values[mapper.name]}
              />
            </Col>
          ))}
          <Col sm={12}>
            <FormGroup>
              <Button size='sm' color='info' onClick={handleSubmit}>
                <Icon.Save className='mr-2' strokeWidth='1' />
                {editMode ? "Update" : "Add"}
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default BlogForm
