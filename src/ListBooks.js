import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import shelfValues from './ShelfValues'

export default function ListBooks({ books, changeShelf }) {
    return (
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              <div className='bookshelf'>
                {
                  Object.entries(shelfValues).map(shelf => (
                    <BookShelf
                      key={shelf[0]}
                      shelfId={shelf[0]}
                      shelfName={shelf[1]}
                      books={books}
                      changeShelf={changeShelf}
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
