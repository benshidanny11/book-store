/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { BOOKS_API, getRemoveBookURL } from '../../constants/apiconstants';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const GET_BOOKS_ERROR = 'bookStore/books/GET_BOOKS_ERROR';
// const ADD_BOOK_ERROR = 'bookStore/books/ADD_BOOK_ERROR';
// const REMOVE_ERROR = 'bookStore/books/REMOVE_ERROR';

const initialState = [];

export const getBooksAction = () => (dispatch) => axios.get(BOOKS_API)
  .then(({ data }) => {
    dispatch({ type: GET_BOOKS, books: data, error: null });
  })
  .catch((error) => {
    dispatch({ type: GET_BOOKS_ERROR, books: [], error });
  });

export const addBookAction = (payload) => async (dispatch) => {
  const { data } = await axios.post(BOOKS_API, payload);
  dispatch({ type: ADD_BOOK, payload: data, error: null });
};

export const removeBookAction = (payload) => async (dispatch) => {
  const { data } = await axios.delete(getRemoveBookURL(payload), { item_id: payload });
  dispatch({ type: REMOVE_BOOK, payload: data, error: null });
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [action.payload];
    case REMOVE_BOOK:
      return state.payload;
    default:
      return state;
  }
}
