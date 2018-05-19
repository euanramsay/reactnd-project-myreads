import React from 'react';
import PropTypes from 'prop-types';
import SHELF_VALUES from '../enums/ShelfValues';

/**
 * @description Renders a dropdown menu of user options to move book and
 * takes in value of selection and calls changeShelf function with value.
 */
export default function BookShelfChanger({ book, changeShelf }) {
  return (
    <select
      defaultValue={book.shelf ? book.shelf : 'none'}
      onChange={event => changeShelf(book, event.target.value)}
    >
      <option value="heading" disabled>
        Move to...
      </option>
      {Object.keys(SHELF_VALUES).map(shelfId => {
        const shelfName = SHELF_VALUES[shelfId];
        return (
          <option key={shelfId} value={shelfId}>
            {shelfName}
          </option>
        );
      })}
      })}
      <option value="none">None</option>
    </select>
  );
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
};
