import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const AddAuthor = (props) => {
    const [ authors, setAuthors ] = useState([]);
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors/add', authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    return  (
        <div className='head'>
            <h1>Favorite authors</h1>
            <Link to={'/'}> Home </Link>
            <h3> Add a new author: </h3>
            <AuthorForm onSubmitProp={createAuthor} initialName='' errors={errors}  />
        </div>
    )
}

export default AddAuthor;