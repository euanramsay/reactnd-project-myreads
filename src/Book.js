import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

  render() {
    const { bookInfo } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover" 
              style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: "url(" + bookInfo.imageLinks.thumbnail + ")" }}>
              </div>
            <div className="book-shelf-changer">
              <BookShelfChanger book={bookInfo}/>
            </div>
          </div>
          <div className="book-title">{bookInfo.title}</div>
          <div className="book-authors">{bookInfo.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book