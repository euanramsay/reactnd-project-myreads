import React, { Component } from "react";
import * as shelves from "./ShelfValues";
import { update } from "./BooksAPI";

class BookShelfChanger extends Component {

  state = {
    shelf: ''
  }

  handleChange(event) {
    update(this.props.book, event.target.value).then(
      this.setState({ book: this.props.book })
    )
  }

  render() {
    const { book } = this.props;
    return (
      <select value={this.state.value} defaultValue={book.shelf ? book.shelf : 'none'} onChange={this.handleChange.bind(this)}>
        <option value="heading" disabled>
          Move to...
        </option>
        {shelves.map(shelf => {
          return <option key={Object.keys(shelf)[0]} value={Object.keys(shelf)[0]}>
            {Object.values(shelf)[0]}
          </option>
        })}
        <option value="none">None</option>
      </select>
    );
  }
}

export default BookShelfChanger;
