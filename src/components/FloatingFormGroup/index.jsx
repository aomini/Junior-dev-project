import React, { useState, useEffect } from "react"
import { FormGroup, FormFeedback, Label, Input } from "reactstrap"
import classNames from "classnames/bind"
import "./floating-form-group.scss"

const FloatingFormGroup = (props) => {
  const {
    name,
    type,
    defaultValue,
    value,
    validation = false,
    errors = {},
    dynamicAttributes,
  } = props
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (value) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [value])

  return (
    <FormGroup className={classNames("float-label", type)}>
      <Input
        type={type}
        name={name}
        invalid={validation ? name in errors : false}
        value={value || defaultValue}
        autoComplete='off'
        {...dynamicAttributes}
      />
      <Label
        for={name}
        className={classNames(isActive ? "active" : "", "text-capitalize")}
      >
        {name}
      </Label>
      {validation && errors[name] && (
        <FormFeedback>{errors[name]}</FormFeedback>
      )}
    </FormGroup>
  )
}

export default FloatingFormGroup
