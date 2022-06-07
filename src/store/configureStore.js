import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import booksReducers from './books/books';

const reducers = combineReducers({
  books: booksReducers,
});

const middlwares = [thunk, logger];

const store = createStore(
  reducers, composeWithDevTools(applyMiddleware(...middlwares)),
);

export default store;
