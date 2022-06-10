import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksReducers from './books/books';
import categoryReducers from './categories/categories';

const reducers = combineReducers({
  books: booksReducers,
  categories: categoryReducers,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
