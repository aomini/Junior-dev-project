import React from "react"
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
import useForm from "./useForm"
import { validate } from "./validationRules"

const ProductForm = () => {
  let history = useHistory()
  const submitData = () => {
    let products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : []
    localStorage.setItem("products", JSON.stringify([...products, values]))
    history.push("/products")
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitData,
    validate
  )

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
                placeholder=''
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
                <Icon.Plus />
                Add
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default ProductForm
