import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { getAll, update } from './BooksAPI'

export default class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books })
    })
  } 

  changeShelf(book, shelf) {
    update(book, shelf)
      .then(getAll)
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
    this.changeShelf = this.changeShelf.bind(this)
    
    return (
      <div>
        <Route exact path='/' render={() => 
          <ListBooks books={this.state.books} changeShelf={this.changeShelf} />} />
        <Route path='/search' render={({ history }) => 
          <SearchBook myBooks={this.state.books} changeShelf={this.changeShelf} />} />
      </div>
    )
  }
}

