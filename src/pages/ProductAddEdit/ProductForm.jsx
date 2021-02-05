import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Col, Form, FormGroup } from "reactstrap"
import * as Icon from "react-feather"
import { toast } from "react-toastify"
import { countProperties } from "../../utilities"
import useForm from "../../hooks/useForm"
import FloatingFormGroup from "../../components/FloatingFormGroup"
import AutoCompleteModal from "./AutoCompleteModal"
import { validate } from "./validationRules"

const ProductForm = ({ id, editMode }) => {
  const history = useHistory()
  const [autoCompleteModal, setAutoCompleteModal] = useState(false)

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
    if (
      !editMode && localStorage.getItem("productFilters")
        ? countProperties(JSON.parse(localStorage.getItem("productFilters")))
        : false
    ) {
      setAutoCompleteModal(true)
    }
  }, [])

  useEffect(() => {
    if (id) {
      let products = JSON.parse(localStorage.getItem("products"))
      let product = products.filter((product) => product.id == id)
      setValues({ ...product[0] })
    }
  }, [id, setValues])

  const formMapper = [
    {
      name: "name",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleChange,
      },
      col: 6,
    },
    {
      name: "code",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleChange,
      },
      col: 6,
    },
    {
      name: "price",
      type: "number",
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
      dynamicAttributes: {
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
      {autoCompleteModal && (
        <AutoCompleteModal
          className=''
          modal={autoCompleteModal}
          setModal={setAutoCompleteModal}
          setValues={setValues}
        />
      )}
    </div>
  )
}

export default ProductForm
