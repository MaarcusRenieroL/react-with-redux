import React, {useState} from 'react';
import BookEdit from "./BookEdit";

export default function BookShow({book, onDelete, onEdit}) {

    const [showEdit, setShowEdit] = useState(false);

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleDelete = () => {
        onDelete(book.id);
    }

    const handleSubmit = (id, title) => {
        setShowEdit(false);
        onEdit(id, title);
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