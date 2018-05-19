import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import SHELF_VALUES from '../enums/ShelfValues';

/**
 * @description Renders the main page with the user's bookshelves and books.
 */
export default function ListBooks({ books, changeShelf }) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              {Object.entries(SHELF_VALUES).map(shelf => (
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
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};
