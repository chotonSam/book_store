import { add } from "../actions";

const addBooks = (bookData) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const books = await response.json();

    dispatch(add(books));
  };
};

export default addBooks;
