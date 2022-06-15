import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksAction } from '../store/books/books';

import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const dispatch = useDispatch();

  const booksList = useSelector((state) => Object.entries(state.books));
  const reloadList = useSelector((state) => state.reloadBooks);

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBooksAction());
  }, [reloadList]);

  return (
    <div className="container-div">
      {booksList.length > 0 ? booksList.map((book) => (<Book key={book[0]} book={book} />)) : ''}
      <Form />
    </div>
  );
};

export default Books;
