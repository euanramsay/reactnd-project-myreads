import React, { Component } from 'react'
import * as shelves from './ShelfValues'

class BookShelfChanger extends Component {

  state = {
    shelf: ''
  }

  render() {
    const { changeShelf, book } = this.props;
    return (
      <select 
        value={this.state.value} 
        defaultValue={book.shelf ? book.shelf : 'none'} 
        onChange={(event) => changeShelf(book, event.target.value)}>
        <option value='heading' disabled>
          Move to...
        </option>
        {shelves.map(shelf => {
          return <option key={Object.keys(shelf)[0]} value={Object.keys(shelf)[0]}>
            {Object.values(shelf)[0]}
          </option>
        })}
        <option value='none'>None</option>
      </select>
    )
  }
}

export default BookShelfChanger;
