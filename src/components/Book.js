/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../store/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-div">
        <div className="book">
          <p className="info cate">{book[1][0].category}</p>
          <h1 className="info title">{book[1][0].title}</h1>
          <p className="info auth">{book[1][0].author}</p>
        </div>
        <div className="book-buttons">
          <button type="button" className="button">
            Comments
          </button>
          <div className="Line-2" />
          <button
            type="button"
            className="button"
            onClick={() => {
              dispatch(removeBookAction(book[0]));
              setTimeout(() => location.reload(), 1000);
            }}
          >
            Remove
          </button>
          <div className="Line-2" />
          <button type="button" className="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-details">
        <div className="Oval-2" />
        <div className="book-progress">
          <span className="-Percent-Complete">50%</span>
          <span className="Completed Text-Style-2">Completed</span>
        </div>
        <div className="Line-2-1" />
        <div className="bookactions">
          <span className="Current-Chapter">Current Chapter</span>
          <span className="Current-Lesson Text-Style-4">Introduction</span>
          <span className="Update-progress">Update progress</span>
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
