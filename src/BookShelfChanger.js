import React from 'react'
import PropTypes from 'prop-types'
import shelfValues from './ShelfValues'


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
