import React from "react"
import Style from "./available-attributes.module.scss"

const AvailableColors = ({ colors }) => {
  return (
    <div className='my-4'>
      <h6>Available Colors: </h6>
      <div>
        {colors.map((color, colorKey) => (
          <span
            key={colorKey}
            className={Style.colorButton}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default AvailableColors
