import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../store/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Add book </h2>
      <form className="form-container">
        <div className="form-input">
          <input
            type="text"
            className="input-field"
            placeholder="Book Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            className="input-field"
            placeholder="Book Author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="button"
            className="button"
            value="Add book"
            onClick={() => {
              dispatch(addBookAction({ id: uuidv4(), title, author }));
              setTitle('');
              setAuthor('');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
