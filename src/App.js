import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { getAll, update } from './BooksAPI'

export default class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.changeShelf = this.changeShelf.bind(this)
  }

  state = {
    books: []
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({ books })
    })
  } 

  /**
  * @description Allows user to choose a new shelf for a book by creating
  * a drop down menu and taking value selected. Updates the value of shelf
  * property in book object and updates user's book data using API. Then  
  * gets updated list of users books. 
  * @param {object} book
  * @param {object} shelf
  */
  changeShelf(book, shelf) {
    update(book, shelf)
      .then(getAll)
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
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

