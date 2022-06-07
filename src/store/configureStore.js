import { combineReducers, createStore } from 'redux';

import booksReducers from './books/books';
import categoryReducers from './categories/categories';

const reducers = combineReducers({
  books: booksReducers,
  categories: categoryReducers,
});

const store = createStore(
  reducers,
);

export default store;
