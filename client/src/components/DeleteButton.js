import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log("Deleting...");
                successCallback();
            })
    }

    return (
        <button onClick={deleteAuthor} className='btn btn-outline-danger'>
            Delete
        </button>
    )
}

export default DeleteButton;