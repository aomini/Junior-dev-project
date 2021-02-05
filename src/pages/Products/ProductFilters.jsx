import React, { useState, useEffect } from "react"
import { FormGroup, Col, Button } from "reactstrap"
import { X } from "react-feather"
import FloatingFormGroup from "../../components/FloatingFormGroup"
import { countProperties } from "../../utilities"

const ProductFilters = ({ allProducts, products, setProducts }) => {
  const [filters, setFilters] = useState(
    localStorage.getItem("productFilters")
      ? JSON.parse(localStorage.getItem("productFilters"))
      : {}
  )

  useEffect(() => {
    if (countProperties(filters)) {
      const filteredProducts = allProducts.filter((product) => {
        return Object.keys(filters).every((key) => {
          return product[key].toLowerCase().includes(filters[key].toLowerCase())
        })
      })
      setProducts(filteredProducts)
    } else {
      setProducts(allProducts)
    }
    localStorage.setItem("productFilters", JSON.stringify(filters))
  }, [filters, allProducts])

  const clearSelectedFilter = (selectedKey) => {
    const restObj = {}
    Object.keys(filters).forEach((key) => {
      if (key !== selectedKey) {
        restObj[key] = filters[key]
      }
    })
    setFilters(restObj)
  }

  const clearAllFilter = () => {
    setFilters({})
  }

  const handleSearch = (e) => {
    if (e.target.value) {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      })
    } else {
      clearSelectedFilter(e.target.name)
    }
  }

  const mappers = [
    {
      name: "name",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleSearch,
      },
      col: 4,
    },
    {
      name: "code",
      type: "text",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleSearch,
      },
      col: 3,
    },
    {
      name: "price",
      type: "number",
      defaultValue: "",
      validation: true,
      dynamicAttributes: {
        onChange: handleSearch,
      },
      col: 3,
    },
  ]

  return (
    <div className='mt-3'>
      <div className='mb-2'>
        <span>Filter Data:</span>
      </div>
      <div>
        <FormGroup row>
          {mappers.map((mapper) => (
            <Col sm={mapper.col} key={mapper.name}>
              <FloatingFormGroup
                {...mapper}
                value={
                  mapper.name in filters
                    ? filters[mapper.name]
                    : mapper.defaultValue
                }
              />
            </Col>
          ))}
        </FormGroup>
      </div>
      <div>
        {countProperties(filters) ? (
          <div>
            <div>Search:</div>
            {Object.keys(filters).map((key) => (
              <Button
                key={key}
                className='mr-2'
                color='primary'
                onClick={() => clearSelectedFilter(key)}
              >
                <span>
                  <span className='text-capitalize'> {key}</span> :{" "}
                  {filters[key]}
                </span>
                <span className='ml-2'>
                  <X size='15' color='black' />
                </span>
              </Button>
            ))}
            {countProperties(filters) > 1 && (
              <Button
                className='mr-2'
                color='danger'
                onClick={() => clearAllFilter()}
              >
                <span className='text-capitalize'>Clear All</span>
                <span className='ml-2'>
                  <X size='15' color='black' />
                </span>
              </Button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProductFilters
