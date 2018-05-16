import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as shelfValues from './ShelfValues'

class ListBooks extends Component {
  
  render() {
    return (
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              <div className='bookshelf'>
                {shelfValues.map(shelf => (
                  <BookShelf
                    key={Object.keys(shelf)[0]}
                    shelf={shelf}
                    books={this.props.books}
                    changeShelf={this.props.changeShelf}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
