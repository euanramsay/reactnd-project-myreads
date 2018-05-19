import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

/**
  * @description Renders an individual book with clickable book shelf changer icon.
  */
export default function Book ({ bookInfo, changeShelf }) {
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div 
              className='book-cover' 
              style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url(${bookInfo.imageLinks.thumbnail})` }}>
              </div>
            <div className='book-shelf-changer'>
              <BookShelfChanger book={bookInfo} changeShelf={changeShelf} />
            </div>
          </div>
          <div className='book-title'>{bookInfo.title}</div>
          <div className='book-authors'>{bookInfo.authors}</div>
        </div>
      </li>
    )
  }

  Book.propTypes = {
    bookInfo: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
