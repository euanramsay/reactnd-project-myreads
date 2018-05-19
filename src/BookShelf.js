import React from 'react'
import Book from './Book'

export default function BookShelf({ changeShelf, shelfId, shelfName, books }) {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {
              books.filter(
              book => book.shelf === shelfId)
                .map((book) => (
              <Book 
                key={book.id} 
                bookInfo={book}
                changeShelf={changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
