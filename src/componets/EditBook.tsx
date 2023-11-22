import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import BooksContext from '../contex/BooksContext';

  

const EditBook:React.FC=() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { books, setBooks } = useContext(BooksContext);
  const bookToEdit = books.find((book:any) => book.id === id);

  const handleOnSubmit = (book:any) => {
    const filteredBooks = books.filter((book:any) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    navigate("/")
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;