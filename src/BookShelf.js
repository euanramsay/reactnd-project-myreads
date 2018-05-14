import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    const { shelf, books } = this.props
    console.log(shelf)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{Object.values(shelf)[0]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === Object.keys(shelf)[0]).map((book) => (
              <Book key={book.id} bookInfo={book}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf