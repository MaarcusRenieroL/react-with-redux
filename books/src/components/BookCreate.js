import React, {useState} from 'react';

export default function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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