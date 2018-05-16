import React, { Component } from "react";
import { Link } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';
import { search } from "./BooksAPI";
import Book from "./Book";

class SearchBook extends Component {
  state = {
    query: "",
    books: []
  };

  updateQuery(query) {
    search(query).then(books => (books ? this.setState({ books }) : []));
    this.setState({ query });
  }

  filterResults(book) {
    const myBooksISBN = this.props.myBooks.map(
      myBook => myBook.industryIdentifiers[0].identifier
    );
    if (book) {
      return myBooksISBN.includes(book.industryIdentifiers[0].identifier);
    }
  }

  renderSearchResults() {
    if (this.state.query) {
      return this.state.books.error ? (
        <div>No search results found</div>
      ) : (
        this.state.books.map(book => {
          if (!this.filterResults(book)) {
            return <Book key={book.id} bookInfo={book} changeShelf={this.changeShelf}/>;
          }
        })
      );
    }
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
          <ol className="books-grid">{this.renderSearchResults()}</ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
