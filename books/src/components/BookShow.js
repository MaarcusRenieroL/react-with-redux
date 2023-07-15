import React, { useState } from 'react';
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {

    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleDelete = () => {
        deleteBookById(book.id);
    }

    const handleSubmit = (id, title) => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;

    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className={"book-show"}>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={"book"}/>
            {content}
            <div className={"actions"}>
                <button className={"edit"} onClick={handleEdit}>
                    Edit
                </button>
                <button className={"delete"} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}