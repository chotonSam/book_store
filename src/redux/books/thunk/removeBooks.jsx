import { remove } from "../actions";

const removeBooks = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });

    dispatch(remove(bookId));
  };
};

export default removeBooks;
