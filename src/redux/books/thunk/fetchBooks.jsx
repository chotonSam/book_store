import { loaded } from "../actions";

const fetchBooks = async (dispatch) => {
  try {
    const response = await fetch(
      "https://book-store-json-server-pt5z.onrender.com/books"
    );
    const books = await response.json();

    dispatch(loaded(books));
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchBooks;
