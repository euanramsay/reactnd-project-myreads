import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";
import BookShelf from "./BookShelf";
import * as shelfValues from "./ShelfValues"

class ListBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                {shelfValues.map(shelf => (
                  <BookShelf
                    key={Object.keys(shelf)[0]}
                    shelf={shelf}
                    books={this.state.books}
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
}

export default ListBooks;
