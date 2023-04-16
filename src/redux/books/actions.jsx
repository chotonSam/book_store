import { ADD, EDIT, LOADED, REMOVE } from "./actionTypes";

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

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
