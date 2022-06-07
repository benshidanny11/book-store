const CHECK_STATUS = 'bookStore/category/CHECK_STATUS';

const initialState = [];

export const checkStatusAction = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
