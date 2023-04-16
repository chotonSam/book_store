import { remove } from "../actions";

const removeBooks = (bookId) => {
  return async (dispatch) => {
    await fetch(`https://book-store-json-server-pt5z.onrender.com/books/${bookId}`, {
      method: "DELETE",
    });

    dispatch(remove(bookId));
  };
};

export default removeBooks;
