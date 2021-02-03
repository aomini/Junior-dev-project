import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
} from "reactstrap"
import * as Icon from "react-feather"
import { toast } from "react-toastify"
import useForm from "../../hooks/useForm"
import { validate } from "./validationRules"

const ProductForm = ({ id, editMode }) => {
  const history = useHistory()
  const submitData = () => {
    const products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : []
    const newId = products.length ? products[products.length - 1].id + 1 : 1
    const objId = editMode ? id : newId
    localStorage.setItem(
      "products",
      JSON.stringify([
        ...(editMode
          ? products.filter((product) => product.id != id)
          : products),
        { id: objId, ...values },
      ])
    )
    editMode
      ? toast.success("Updated Product")
      : toast.success("Added New Product")
    history.goBack()
  }

  const { handleChange, handleSubmit, setValues, values, errors } = useForm(
    submitData,
    validate
  )

  useEffect(() => {
    if (id) {
      let products = JSON.parse(localStorage.getItem("products"))
      let product = products.filter((product) => product.id == id)
      setValues({ ...product[0] })
    }
  }, [id])

  return (
    <div>
      <Form>
        <FormGroup row>
          <Col sm={6}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                invalid={"name" in errors}
                value={values.name || ""}
                onChange={handleChange}
              />
              {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for='code'>Code</Label>
              <Input
                type='text'
                name='code'
                invalid={"code" in errors}
                value={values.code || ""}
                onChange={handleChange}
                placeholder=''
              />
              {errors.code && <FormFeedback>{errors.code}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for='price'>Price</Label>
              <Input
                type='number'
                name='price'
                invalid={"price" in errors}
                value={values.price >= 0 ? values.price : 0 || 0.0}
                onChange={handleChange}
                placeholder=''
              />
              {errors.price && <FormFeedback>{errors.price}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for='url'>Image Url</Label>
              <Input
                type='text'
                name='url'
                value={values.url || ""}
                onChange={handleChange}
                placeholder=''
              />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup>
              <Button size='sm' color='info' onClick={handleSubmit}>
                <Icon.Save className='mr-2' stroke-width='1' />
                {editMode ? "Update" : "Add"}
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default ProductForm
