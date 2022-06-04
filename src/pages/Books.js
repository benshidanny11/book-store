import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const bookList = [
    {
      id: uuidv4(),
      title: 'JavaScript best practices',
      author: 'Daniel Urimubenshi',
      category: 'Technology',
    },
    {
      id: uuidv4(),
      title: 'Healthy programmer',
      author: 'Dr Desire Mukiza',
      category: 'Science',
    },
  ];
  return (
    <div className="container-div">
      {bookList.length > 0 ? bookList.map((book) => (<Book key={book.id} book={book} />)) : ''}
      <Form />
    </div>
  );
};

export default Books;
