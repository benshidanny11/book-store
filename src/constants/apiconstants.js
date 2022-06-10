export const BOOKS_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ua4gEIdx4RLT8PSxRkw4/books';

export const getRemoveBookURL = (bookId) => `${BOOKS_API}/${bookId}`;
