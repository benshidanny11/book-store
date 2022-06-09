/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../store/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div key={book[0]} className="book-div">
        <div className="book">
          <h1>{book[1][0].title}</h1>
          <p>{book[1][0].author}</p>
          <p>{book[1][0].category}</p>
        </div>
        <div className="book-buttons">
          <button
            type="button"
            className="button"
            onClick={() => {
              dispatch(removeBookAction(book[0]));
              setTimeout(() => location.reload(), 500);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
