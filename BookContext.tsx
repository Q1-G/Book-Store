import React, { createContext, useContext, useState } from 'react';

const BooksContext = createContext(null); 

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);

export const useBooksActions = () => {
  const { addBook, removeBook } = useBooks() || {};
  return { addBook, removeBook };
};
