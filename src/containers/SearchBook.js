import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';
import { search } from '../BooksAPI';
import Book from '../components/Book';

/**
 * @description Renders search page with user search input and displays search results.
 */
export default class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    };
  }
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  /**
   * @description Takes user search term, makes search call to API and updates state.
   * @param {string} query - Search term typed by user.
   */
  updateQuery(query) {
    search(query).then(books => (books ? this.addShelf(books) : []));
    this.setState({ query });
  }

  /**
   * @description Takes the array of books returned by search and compares with users
   * collection of books. If the user already has one of the books on their shelves, the
   * name of that shelf is allocated to that book.
   * @param {array} books - Array of book objects returned from search.
   */
  addShelf(books) {
    const searchResultBooks = books.map(book => {
      this.props.myBooks.forEach(myBook => {
        if (book.id === myBook.id) {
          book.shelf = myBook.shelf;
        }
      });
      return book;
    });
    this.setState({
      books: searchResultBooks
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              debounceTimeout={300}
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.error ? (
              <div>No search results found</div>
            ) : (
              this.state.books.map(book => (
                <Book
                  key={book.id}
                  bookInfo={book}
                  changeShelf={this.props.changeShelf}
                />
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}
