import React from 'react'
import PropTypes from 'prop-types'
import shelfValues from '../enums/ShelfValues'

/**
  * @description Renders a dropdown menu of user option to move book and takes in
  * value of selection and calls changeShelf function with value.
  */
export default function BookShelfChanger ({ book, changeShelf }) {
  return (
      <select
        defaultValue={book.shelf ? book.shelf : 'none'} 
        onChange={(event) => changeShelf(book, event.target.value)}>
        <option value='heading' disabled>
          Move to...
        </option>
            {
              Object.keys(shelfValues).map(shelfId => {
                const shelfName = shelfValues[shelfId]
                return (
                  <option key={shelfId} value={shelfId}>
                    {shelfName}
                  </option>
                )
            })}
        })}
        <option value='none'>None</option>
      </select>
    )
  }

  BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
