import React, { useState } from 'react';
import CancelButton from './CancelButton';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp, errors } = props;
    const [ name, setName ] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
    }

    return (
        <div className='form'>
            <div className='form-body'>
                <form onSubmit ={ onSubmitHandler }>
                    <div className='row mb-4'>
                        <label className='col-sm-2 col-form-label offset-3 mt-3'> Name </label><br />
                        <div className='col-sm-3 mt-3'>
                            <input type="text" className={`form-control ${errors.name && 'is-invalid'}`} name='name' value={name} placeholder="Rick Riordan" onChange = {(e) => setName(e.target.value)}/>
                            { errors.name &&
                                <p className='text-danger'>{ errors.name.message }</p>
                            }
                        </div>
                    </div>

                    <div>
                        <input type="submit" className="btn btn-outline-success buttons"/>
                        <CancelButton />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;