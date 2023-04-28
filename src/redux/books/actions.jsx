import { ADD, EDIT, REMOVE } from "./actionTypes";

export const add = (books) => {
  return {
    type: ADD,
    payload: books,
  };
};

export const edit = (books, id) => {
  return {
    type: EDIT,
    payload: {
      books,
      id,
    },
  };
};

export const remove = (bookId) => {
  return {
    type: REMOVE,
    payload: bookId,
  };
};
