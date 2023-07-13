import React from 'react';

import BookShow from "./BookShow";

export default function BookList({books, onDelete, onEdit}) {

    const renderedBook = books.map((book, index) => {
        return <BookShow key={index} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return (
        <div className={"book-list"}>
            {renderedBook}
        </div>
    );
}