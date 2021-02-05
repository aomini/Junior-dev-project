import React, { useEffect, useState } from "react"
import Style from "./available-attributes.module.scss"

const AvailableSizes = ({ sizes, show = false }) => {
  const [showAll, setShowAll] = useState(show)
  const [filteredSizes, setFilterSizes] = useState([])

  useEffect(() => {
    if (!showAll) {
      setFilterSizes([...sizes.slice(0, 2)])
    } else {
      setFilterSizes([...sizes])
    }
  }, [showAll])

  return (
    <div className='my-4'>
      <h6>Available Sizes: </h6>

      <div className={Style.sizesContainer}>
        {filteredSizes.map((size, sizeKey) => (
          <span key={sizeKey} className={Style.sizeButton}>
            {size}
          </span>
        ))}
        <span className={Style.moreButton} onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "Less" : "More"}
        </span>
      </div>
    </div>
  )
}

export default AvailableSizes
