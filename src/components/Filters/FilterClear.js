import React from 'react'
import { Button } from 'react-bootstrap'

const FilterClear = ({productDispatch}) => {
    return (
        <div>
            <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
        </div>
    )
}

export default FilterClear


