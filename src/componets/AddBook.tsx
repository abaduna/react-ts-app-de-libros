
import React, { useContext } from 'react';

import { useNavigate   } from "react-router-dom"
import BookForm from './BookForm';
import BooksContext from '../contex/BooksContext';


const AddBook:React.FC = () => {
    const navigate = useNavigate();
    const { books, setBooks } = useContext(BooksContext);
    const handleOnSubmit = (book:any) => {
      setBooks([book, ...books]);
      navigate("/")
      
    };
  
    return (
      <>
        <BookForm handleOnSubmit={handleOnSubmit} />
      </>
    );
  };
  
  export default AddBook;