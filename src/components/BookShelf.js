import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

/**
 * @description Renders a bookshelf containing books that have that bookshelf value.
 */
export default function BookShelf({ books, changeShelf, shelfId, shelfName }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter(book => book.shelf === shelfId)
            .map(book => (
              <Book key={book.id} bookInfo={book} changeShelf={changeShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  shelfId: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired
};
