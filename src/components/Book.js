import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div className="book-container">
    <div key={book.id} className="book-div">
      <div className="book">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.category}</p>
      </div>
      <div className="book-buttons">
        <button type="button" className="button">
          Remove
        </button>
      </div>
    </div>

  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
