import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
    const [ author, setAuthor ] = useState([]);

    return (
        <div className='head'>
            <h1>Favorite authors</h1>
            <Link to ={'/authors/new'}>Add an author</Link>
            <AuthorList author={author} setAuthor={setAuthor}/>
        </div>
    )
}

export default Main;