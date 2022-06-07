import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const booksList = useSelector((state) => state.books);

  return (
    <div className="container-div">
      {booksList.length > 0 ? booksList.map((book) => (<Book key={book.id} book={book} />)) : ''}
      <Form />
    </div>
  );
};

export default Books;
