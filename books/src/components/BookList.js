import React  from 'react';

import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

export default function BookList() {

    const { books } = useBooksContext()


    const renderedBook = books?.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className={"book-list"}>
            {renderedBook}
        </div>
    );
}