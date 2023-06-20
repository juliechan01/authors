import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorList = (props) => {
    const { author, setAuthor } = props;

    const removeFromDom = (id) => {
        setAuthor(author.filter(author => author._id != id));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data);
            setAuthor(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className='card'>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td>Author name</td>
                            <td>Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            author.map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='align-middle'>{author.name}</td>
                                        <td>
                                            <Link to={`/authors/${author._id}`} className='btn btn-outline-secondary me-2'>
                                                Edit
                                            </Link>
                                            <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AuthorList;