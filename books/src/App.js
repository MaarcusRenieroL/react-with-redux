import React, {useEffect, useState} from 'react';

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


export default function App() {

    const [books, setBooks] = useState([]);

    const fetchBook = async () => {

        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);

    }

    useEffect(() => {
        fetchBook();
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

    const deleteBookByID = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }



    return (
        <div className={"app"}>
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById}
            onDelete={deleteBookByID}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}