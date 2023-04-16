import { edit } from "../actions";

const editBooks = (bookData, editId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${editId}`, {
      method: "PATCH",
      body: JSON.stringify(bookData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const books = await response.json();

    dispatch(edit(books, editId));
  };
};

export default editBooks;
