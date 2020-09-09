import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';


const Login = ({ onIdSubmit }) => {
    const idRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        onIdSubmit(idRef.current.value)
    };

    const createNewId = () => {
        onIdSubmit(uuid());
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your ID</label>
                    <input type="text" name="id" ref={idRef} required />
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button onClick={createNewId} type="button">Create New ID</button>
                </div>
            </form>
        </div>
    )
};

export default Login;