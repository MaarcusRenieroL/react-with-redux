import {createContext, useCallback, useState} from "react";

import axios from "axios";

const BookContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {

        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);

    }, [])


    const createBook = async (title) => {

        const response = await axios.post("http://localhost:3001/books", {
            title: title
        });

        const updatedBook = [
            ...books,
            response.data
        ];

        setBooks(updatedBook);
    }

    const editBookById = async (id, title) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data
                }
            }

            return book;
        })

        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        createBook,
        editBookById,
        deleteBookById,
        fetchBooks
    }

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}

export { Provider };
export default BookContext;