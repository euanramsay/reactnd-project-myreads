import React, { Component } from 'react'
import shelfValues from './ShelfValues'

export default class BookShelfChanger extends Component {

  render() {
    const { changeShelf, book } = this.props;
    
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
}

