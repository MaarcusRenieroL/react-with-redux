import React, {useContext, useEffect} from 'react';

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BookContext from "./context/books";


export default function App() {

    const { fetchBooks } = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className={"app"}>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}