import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [ author, setAuthor ] = useState("");
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = authorParam => {
        axios.put(`http://localhost:8000/api/authors/${id}`, authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='head'>
            <h1>Favorite Authors</h1>
            <Link to={'/'}> Home </Link>
            <h3>Edit this author:</h3>
            {
                loaded && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} errors={errors}/>
            }
        </div>
    )
}

export default EditAuthor;