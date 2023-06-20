import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CancelButton = (props) => {
    const navigate = useNavigate();

    const clickedButton = () => {
        navigate('/');
    }

    return (
        <button onClick={clickedButton} className='btn btn-outline-secondary'>
            Cancel
        </button>
    )
}

export default CancelButton;