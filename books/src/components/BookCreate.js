import React, { useState } from 'react';
import useBooksContext from "../hooks/use-books-context";

export default function BookCreate() {

    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook (title);
        setTitle("");
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div className={"book-create"}>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className={"input"} value={title} type="text" onChange={handleChange} placeholder="Title"/>
                <button className={"button"} type="submit">Create</button>
            </form>
        </div>
    );
}