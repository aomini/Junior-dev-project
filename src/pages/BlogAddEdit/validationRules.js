import { capitalize } from "../../utilities"

export const validate = (values) => {
  let errors = {}
  let fields = ["title", "subtitle", "description"]
  fields.forEach((field, fieldKey) => {
    if (!values[field]) {
      errors[field] = capitalize(field) + " is a Required Field"
    }
  })
  return errors
}
