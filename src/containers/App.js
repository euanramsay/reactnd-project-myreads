import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListBooks from '../components/ListBooks';
import SearchBook from './SearchBook';
import { getAll, update } from '../BooksAPI';

/**
 * @description Main App container.
 */
export default class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
    this.changeShelf = this.changeShelf.bind(this);
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books });
    });
  }

  /**
   * @description Updates the value of shelf property in book object and updates
   * user's book data using API. Then gets updated list of users books.
   * @param {object} book - The book the user has made selection on.
   * @param {object} shelf - The book shelf to move book to.
   */
  changeShelf(book, shelf) {
    update(book, shelf)
      .then(getAll)
      .then(books => {
        this.setState({ books });
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              myBooks={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}
