import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
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

export const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default function booksReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
