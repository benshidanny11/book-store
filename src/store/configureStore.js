import { combineReducers, createStore } from 'redux';

import booksReducers from './books/books';

const reducers = combineReducers({
  books: booksReducers,
});

const store = createStore(
  reducers,
);

export default store;
