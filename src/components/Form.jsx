import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import formContext from "../contexts/formContext";

import addBooks from "../redux/books/thunk/addBooks";
import editBooks from "../redux/books/thunk/editBooks";

const Form = () => {
  const dispatch = useDispatch();
  const context = useContext(formContext);
  const { bookData, setBookData, editId, SeteditId } = context;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checkOut = e.target.checked;

    if (name === "featured") {
      setBookData({
        ...bookData,
        featured: checkOut,
      });
    } else {
      setBookData({
        ...bookData,
        [name]: value,
      });
    }
  };

  const SubmitHandler = (e) => {
    SeteditId(null);

    if (editId) {
      dispatch(editBooks(bookData, editId));
    } else {
      dispatch(addBooks(bookData));
    }
    e.preventDefault();

    setBookData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={SubmitHandler} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              onChange={handleChange}
              required
              value={bookData.name}
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              onChange={handleChange}
              value={bookData.author}
              checked
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              onChange={handleChange}
              value={bookData.thumbnail}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                onChange={handleChange}
                value={bookData.price}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                onChange={handleChange}
                required
                value={bookData.rating}
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={handleChange}
              checked={bookData.featured}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>
          <button type="submit" className="submit" id="submit">
            {editId ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
