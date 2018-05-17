import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import { search } from './BooksAPI'
import Book from './Book'

export default class SearchBook extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery(query) {
    search(query)
      .then(books => (books ? this.setState({ books }) : []))
    this.setState({ query })
  }

  render() {
    const myBookISBNs = this.props.myBooks.map(book => book.industryIdentifiers[0].identifier)
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <DebounceInput
              minLength={3}
              debounceTimeout={300}
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>{
            this.state.books.error
              ? <div>No search results found</div>
              : this.state.books
                  .filter(
                    book => !myBookISBNs.includes(
                      book.industryIdentifiers[0].identifier
                    )
                  )
                  .map(book => 
                    <Book 
                      key={book.id} 
                      bookInfo={book} 
                      changeShelf={this.props.changeShelf}
                    />)
          }</ol>
        </div>
      </div>
    )
  }
}

