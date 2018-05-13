import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  render() {
    return (
      <div>
      <Route exact path='/' render={() => (
        <ListBooks />
      )}/>

        <Route path='/search' render={({ history }) => (
          <SearchBook />
        )} />
        </div>
    )}
  }

export default BooksApp
